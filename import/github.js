export async function extractCodeFromGithub(githubUrl) {
	try {
		const urlInfo = parseGithubUrl(githubUrl);
		if (!urlInfo) {
			throw new Error("Invalid GitHub URL");
		}

		const code = await fetchGithubContent(urlInfo);
		const info = getRepositoryInfo(githubUrl)
		
		const codeUnits = parseCodeUnits(code, urlInfo.fileExtension);
		const title = `Contents of ${info.path||info.filename||info.repository} authored by ${info.owner} on the github repo ${info.repository} at branch ${info.branch}`
		const textContent = code
		
        const content = codeUnits.map((unit,index)=>{
            unit.index = index
			unit.branch = info.branch
            return unit
        })

		return {title,textContent,content}
	} catch (error) {
		console.error("Error extracting code:", error);
		throw error;
	}
}

function parseGithubUrl(url) {
	const patterns = [
		/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)/, // blob URL
		/github\.com\/([^/]+)\/([^/]+)\/tree\/([^/]+)\/(.+)/, // repo tree URL
		/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)/, // raw file URL
	];

	for (const pattern of patterns) {
		const match = url.match(pattern);
		if (match) {
			const [, owner, repo, branch, path] = match;
			return {
				owner,
				repo,
				branch,
				path,
				fileExtension: path.split(".").pop().toLowerCase(),
			};
		}
	}
	return null;
}

async function fetchGithubContent(urlInfo) {
	const apiUrl = `https://api.github.com/repos/${urlInfo.owner}/${urlInfo.repo}/contents/${urlInfo.path}?ref=${urlInfo.branch}`;

	const response = await fetch(apiUrl, {
		headers: {
			Accept: "application/vnd.github.v3+json",
		},
	});

	if (!response.ok) {
		throw new Error(`GitHub API error: ${response.status}`);
	}

	const data = await response.json();
	return atob(data.content).trim();
}

function parseCodeUnits(content, fileExtension) {
	switch (fileExtension) {
		case "js":
		case "ts":
			return parseJavaScriptUnits(content);
		case "py":
			return parsePythonUnits(content);
		case "java":
			return parseJavaUnits(content);
		default:
			return parseGenericUnits(content);
	}
}

function parseJavaScriptUnits(content) {
	const units = [];
	let currentUnit = "";
	let currentType = "";
	let currentName = "";
	let braceCount = 0;
	let inComment = false;
	let inMultiLineComment = false;
	let startLineNumber = 0;
	let currentLineNumber = 0;
	const lines = content.split("\n");

	const patterns = {
		class: /class\s+(\w+)/,
		function:
			/(?:function\s+(\w+)|(?:const|let|var)\s+(\w+)\s*=\s*(?:async\s*)?function)/,
		arrow: /(?:const|let|var)\s+(\w+)\s*=\s*(?:async\s*)?(?:\(.*?\)|\w+)\s*=>/,
		object: /(?:const|let|var)\s+(\w+)\s*=\s*{/,
		method: /(\w+)\s*\([^)]*\)\s*{/,
	};

	function addUnit() {
		if (currentUnit.trim() && currentName) {
			const endLineNumber = currentLineNumber;
			const codeLines = currentUnit.split("\n");

			units.push({
				type: currentType,
				name: currentName,
				text: currentUnit.trim(),
				location: {
					startLine: startLineNumber,
					endLine: endLineNumber,
					lineCount: endLineNumber - startLineNumber + 1,
				},
				dependencies: extractDependencies(currentUnit),
				complexity: calculateComplexity(currentUnit),
			});
		}
		currentUnit = "";
		currentType = "";
		currentName = "";
		braceCount = 0;
		startLineNumber = 0;
	}

	for (let i = 0; i < lines.length; i++) {
		currentLineNumber = i + 1;
		const line = lines[i];

		if (line.trim().startsWith("//")) {
			if (currentUnit) currentUnit += line + "\n";
			continue;
		}

		if (line.includes("/*")) inMultiLineComment = true;
		if (line.includes("*/")) inMultiLineComment = false;
		if (inMultiLineComment) {
			if (currentUnit) currentUnit += line + "\n";
			continue;
		}

		if (!currentUnit) {
			for (const [type, pattern] of Object.entries(patterns)) {
				const match = line.match(pattern);
				if (match) {
					currentType = type;
					currentName = match[1] || match[2];
					currentUnit = line + "\n";
					startLineNumber = currentLineNumber;
					braceCount =
						(line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
					break;
				}
			}
		} else {
			currentUnit += line + "\n";
			braceCount +=
				(line.match(/{/g) || []).length - (line.match(/}/g) || []).length;

			if (braceCount === 0) {
				addUnit();
			}
		}
	}

	if (currentUnit) {
		addUnit();
	}

	return units;
}

function extractDependencies(code) {
	const dependencies = new Set();

	const importMatches = code.matchAll(
		/import\s+{?\s*([^}]+?)\s*}?\s+from\s+['"]([^'"]+)['"]/g
	);
	for (const match of importMatches) {
		const imports = match[1].split(",").map((i) => i.trim());
		const from = match[2];
		imports.forEach((imp) => dependencies.add(`${imp} (from ${from})`));
	}

	const requireMatches = code.matchAll(
		/(?:const|let|var)\s+(\w+)\s*=\s*require\s*\(['"]([^'"]+)['"]\)/g
	);
	for (const match of requireMatches) {
		dependencies.add(`${match[1]} (from ${match[2]})`);
	}

	return Array.from(dependencies);
}

function calculateComplexity(code) {
	let complexity = 1;
	const controlStructures = [
		/if\s*\(/g,
		/else\s*{/g,
		/for\s*\(/g,
		/while\s*\(/g,
		/switch\s*\(/g,
		/\?\s*[^:]+\s*:/g, 
		/\|\|/g,
		/&&/g,
	];

	controlStructures.forEach((pattern) => {
		const matches = code.match(pattern);
		if (matches) {
			complexity += matches.length;
		}
	});

	return complexity;
}

function parsePythonUnits(content) {
	const units = [];
	let currentUnit = "";
	let currentType = "";
	let currentName = "";
	let indentLevel = 0;
	let startLineNumber = 0;
	let currentLineNumber = 0;
	let inDocstring = false;
	let docstringQuotes = "";
	const lines = content.split("\n");

	const patterns = {
		class: /^class\s+(\w+)(?:\(.*\))?:/,
		function: /^def\s+(\w+)\s*\([^)]*\):/,
		async_function: /^async\s+def\s+(\w+)\s*\([^)]*\):/,
		method: /^\s+def\s+(\w+)\s*\([^)]*\):/,
		async_method: /^\s+async\s+def\s+(\w+)\s*\([^)]*\):/,
	};

	function getIndentationLevel(line) {
		const match = line.match(/^(\s*)/);
		return match ? match[1].length : 0;
	}

	function addUnit() {
		if (currentUnit.trim() && currentName) {
			const endLineNumber = currentLineNumber;
			const codeLines = currentUnit.split("\n");

			let docstring = "";
			const docstringMatch = currentUnit.match(
				/"""([\s\S]*?)"""|'''([\s\S]*?)'''/
			);
			if (docstringMatch) {
				docstring = (docstringMatch[1] || docstringMatch[2]).trim();
			}

			units.push({
				type: currentType,
				name: currentName,
				text: currentUnit.trim(),
				location: {
					startLine: startLineNumber,
					endLine: endLineNumber,
					lineCount: endLineNumber - startLineNumber + 1,
				},
				docstring: docstring,
				dependencies: extractPythonDependencies(currentUnit),
				complexity: calculatePythonComplexity(currentUnit),
			});
		}
		currentUnit = "";
		currentType = "";
		currentName = "";
		indentLevel = 0;
		startLineNumber = 0;
	}

	for (let i = 0; i < lines.length; i++) {
		currentLineNumber = i + 1;
		const line = lines[i];
		const trimmedLine = line.trim();
 
		if (!trimmedLine || trimmedLine.startsWith("#")) {
			if (currentUnit) currentUnit += line + "\n";
			continue;
		}

		if (
			!inDocstring &&
			(trimmedLine.startsWith('"""') || trimmedLine.startsWith("'''"))
		) {
			inDocstring = true;
			docstringQuotes = trimmedLine.substring(0, 3);
			if (currentUnit) currentUnit += line + "\n";
			continue;
		}
		if (inDocstring) {
			if (currentUnit) currentUnit += line + "\n";
			if (trimmedLine.endsWith(docstringQuotes)) {
				inDocstring = false;
			}
			continue;
		}

		const currentIndent = getIndentationLevel(line);
		if (!currentUnit) {
			for (const [type, pattern] of Object.entries(patterns)) {
				const match = trimmedLine.match(pattern);
				if (match) {
					currentType = type;
					currentName = match[1];
					currentUnit = line + "\n";
					startLineNumber = currentLineNumber;
					indentLevel = currentIndent;
					break;
				}
			}
		} else {
			if (currentIndent <= indentLevel && !inDocstring) {
				let isNewDefinition = false;
				for (const pattern of Object.values(patterns)) {
					if (trimmedLine.match(pattern)) {
						isNewDefinition = true;
						break;
					}
				}

				if (isNewDefinition || currentIndent < indentLevel) {
					addUnit();
					i--;
					continue;
				}
			}
			currentUnit += line + "\n";
		}
	}

	if (currentUnit) {
		addUnit();
	}

	return units;
}

function extractPythonDependencies(code) {
	const dependencies = new Set();

	const importMatches = code.matchAll(
		/^(?:from\s+(\S+)\s+)?import\s+([^#\n]+)/gm
	);
	for (const match of importMatches) {
		const fromModule = match[1];
		const imports = match[2].split(",").map((i) => i.trim().split(" as ")[0]);

		if (fromModule) {
			imports.forEach((imp) => dependencies.add(`${imp} (from ${fromModule})`));
		} else {
			imports.forEach((imp) => dependencies.add(imp));
		}
	}

	return Array.from(dependencies);
}

function calculatePythonComplexity(code) {
	let complexity = 1;

	const controlStructures = [
		/\bif\b/g,
		/\belif\b/g,
		/\belse\b/g,
		/\bfor\b/g,
		/\bwhile\b/g,
		/\btry\b/g,
		/\bexcept\b/g,
		/\band\b/g,
		/\bor\b/g,
		/\breturn\b/g,
		/\byield\b/g,
		/\braise\b/g,
	];

	controlStructures.forEach((pattern) => {
		const matches = code.match(pattern);
		if (matches) {
			complexity += matches.length;
		}
	});

	
	const comprehensions = code.match(/\[.*\bfor\b.*\]/g) || [];
	const generators = code.match(/\(.*\bfor\b.*\)/g) || [];
	complexity += comprehensions.length + generators.length;

	return complexity;
}

function parseJavaUnits(content) {
	const units = [];
	let currentUnit = "";
	let currentType = "";
	let currentName = "";
	let braceCount = 0;
	let startLineNumber = 0;
	let currentLineNumber = 0;
	let inComment = false;
	let inMultiLineComment = false;
	let currentAnnotations = [];
	let currentModifiers = [];
	const lines = content.split("\n");

	const patterns = {
		class:
			/(?:public|private|protected)?\s*(?:static)?\s*(?:final)?\s*class\s+(\w+)(?:<[^>]+>)?(?:\s+extends\s+\w+)?(?:\s+implements\s+[^{]+)?{/,
		interface:
			/(?:public|private|protected)?\s*(?:static)?\s*interface\s+(\w+)(?:<[^>]+>)?(?:\s+extends\s+[^{]+)?{/,
		enum: /(?:public|private|protected)?\s*(?:static)?\s*enum\s+(\w+)\s*{/,
		method:
			/(?:public|private|protected)?\s*(?:static)?\s*(?:final)?\s*(?:<[^>]+>)?\s*(?:\w+)\s+(\w+)\s*\([^)]*\)\s*(?:throws\s+[^{]+)?{/,
		constructor:
			/(?:public|private|protected)?\s*(\w+)\s*\([^)]*\)\s*(?:throws\s+[^{]+)?{/,
	};

	function getModifiers(line) {
		const modifierPattern =
			/\b(public|private|protected|static|final|abstract|synchronized|native|transient|volatile)\b/g;
		return line.match(modifierPattern) || [];
	}

	function getAnnotations(line) {
		const annotationPattern = /@\w+(?:\([^)]*\))?/g;
		return line.match(annotationPattern) || [];
	}

	function addUnit() {
		if (currentUnit.trim() && currentName) {
			const endLineNumber = currentLineNumber;
			const codeLines = currentUnit.split("\n");

			let javadoc = "";
			const javadocMatch = currentUnit.match(/\/\*\*([\s\S]*?)\*\//);
			if (javadocMatch) {
				javadoc = javadocMatch[1]
					.split("\n")
					.map((line) => line.trim().replace(/^\*\s*/, ""))
					.filter((line) => line)
					.join("\n");
			}

			units.push({
				type: currentType,
				name: currentName,
				text: currentUnit.trim(),
				location: {
					startLine: startLineNumber,
					endLine: endLineNumber,
					lineCount: endLineNumber - startLineNumber + 1,
				},
				modifiers: currentModifiers,
				annotations: currentAnnotations,
				javadoc: javadoc,
				dependencies: extractJavaDependencies(currentUnit),
				complexity: calculateJavaComplexity(currentUnit),
			});
		}
		currentUnit = "";
		currentType = "";
		currentName = "";
		braceCount = 0;
		currentModifiers = [];
		currentAnnotations = [];
		startLineNumber = 0;
	}

	for (let i = 0; i < lines.length; i++) {
		currentLineNumber = i + 1;
		const line = lines[i];
		const trimmedLine = line.trim();

		if (trimmedLine.startsWith("//")) {
			if (currentUnit) currentUnit += line + "\n";
			continue;
		}

		if (trimmedLine.includes("/*")) {
			inMultiLineComment = true;
		}
		if (inMultiLineComment) {
			if (currentUnit) currentUnit += line + "\n";
			if (trimmedLine.includes("*/")) {
				inMultiLineComment = false;
			}
			continue;
		}

		if (trimmedLine.startsWith("@")) {
			currentAnnotations.push(trimmedLine);
			if (currentUnit) currentUnit += line + "\n";
			continue;
		}

		if (!currentUnit) {
			for (const [type, pattern] of Object.entries(patterns)) {
				const match = trimmedLine.match(pattern);
				if (match) {
					currentType = type;
					currentName = match[1];
					currentModifiers = getModifiers(trimmedLine);
					currentUnit = line + "\n";
					startLineNumber = currentLineNumber;
					braceCount =
						(line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
					break;
				}
			}
		} else {
			currentUnit += line + "\n";
			braceCount +=
				(line.match(/{/g) || []).length - (line.match(/}/g) || []).length;

			if (braceCount === 0) {
				addUnit();
			}
		}
	}

	if (currentUnit) {
		addUnit();
	}

	return units;
}

function extractJavaDependencies(code) {
	const dependencies = new Set();

	const importMatches = code.matchAll(/import\s+(?:static\s+)?([^;]+);/g);
	for (const match of importMatches) {
		dependencies.add(match[1].trim());
	}

	const fqcnMatches = code.matchAll(/\bnew\s+([a-zA-Z_][\w.]*\w)\s*\(/g);
	for (const match of fqcnMatches) {
		if (match[1].includes(".")) {
			dependencies.add(match[1]);
		}
	}

	return Array.from(dependencies);
}

function calculateJavaComplexity(code) {
	let complexity = 1;

	const controlStructures = [
		/\bif\b/g,
		/\belse\b/g,
		/\bfor\b/g,
		/\bwhile\b/g,
		/\bdo\b/g,
		/\bswitch\b/g,
		/\bcase\b/g,
		/\bcatch\b/g,
		/\b\|\|\b/g,
		/\b&&\b/g,
		/\?/g,
		/\bthrow\b/g,
	];

	controlStructures.forEach((pattern) => {
		const matches = code.match(pattern);
		if (matches) {
			complexity += matches.length;
		}
	});

	const lambdas = code.match(/->(?={)/g) || [];
	complexity += lambdas.length;

	return complexity;
}

function parseGenericUnits(content) {
	return [
		{
			type: "file",
			name: "complete_file",
			text: content,
			dependencies: [],
			complexity: calculateComplexity(content),
		},
	];
}


function getRepositoryInfo(url) {
    try {
        const urlObj = new URL(url);
        const pathParts = urlObj.pathname.split('/').filter(part => part.length > 0);
        
        let result = {
            filename: null,
            repository: null,
            owner: null,
            branch: null,
            path: null
        };
        
        // Handle different GitHub URL patterns
        if (pathParts.length < 2) {
            return result;
        }
        
        result.owner = pathParts[0];
        result.repository = pathParts[1];
        
        if (pathParts.includes('blob') || pathParts.includes('tree')) {
            const typeIndex = pathParts.findIndex(part => part === 'blob' || part === 'tree');
            if (typeIndex !== -1 && pathParts.length > typeIndex + 1) {
                result.branch = pathParts[typeIndex + 1];
                result.filename = pathParts[pathParts.length - 1];
                result.path = pathParts.slice(typeIndex + 2).join('/');
            }
        } else if (url.includes('raw.githubusercontent.com')) {
            result.branch = pathParts[2];
            result.filename = pathParts[pathParts.length - 1];
            result.path = pathParts.slice(3).join('/');
        }
        
        return result;
    } catch (error) {
        console.error('Error parsing GitHub URL:', error);
        return null;
    }
}
