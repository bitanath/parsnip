export async function getGoogleDoc(documentId) {
	try {
		const token = await chrome.storage.local.get("authToken");

		const response = await fetch(
			`https://docs.googleapis.com/v1/documents/${documentId}`,
			{
				headers: {
					Authorization: `Bearer ${token.authToken}`,
					"Content-Type": "application/json",
				},
			}
		);

		if (!response.ok) {
			const error = await response.json()
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const document = await response.json();
		const parsedContent = parseDocumentToTextObjects(document);
		const textContent = generateLexicalDocumentSummary(parsedContent);

		const title = document.title
		const content = parsedContent
		return {title,content,textContent}
		
	} catch (error) {
		console.error("Error fetching document:", error);
		throw error;
	}
}

function parseDocumentToTextObjects(doc) {
	const textObjects = [];
	
	textObjects.push({
	  type: 'TITLE',
	  content: doc.title,
	  fontSize: null
	});
  
	if (!doc.body || !doc.body.content) {
	  return textObjects;
	}
  
	
	doc.body.content.forEach(element => {
	  if (element.paragraph) {
		const paragraphObjects = parseParagraphElement(element.paragraph);
		textObjects.push(...paragraphObjects);
	  } 
	  else if (element.table) {
		const tableObjects = parseTableElement(element.table);
		textObjects.push(...tableObjects);
	  }
	});
  
	return textObjects.filter(obj => obj.content && obj.content.trim() !== '').map((obj,index)=>{
		let modifiedObj = JSON.parse(JSON.stringify(obj))
		if(/HEADING/ig.test(obj.type)){
			modifiedObj.type = "HEADING"
			modifiedObj.fontSize = obj.fontSize || 18
		}else if(/NORMAL_TEXT/ig.test(obj.type)){
			modifiedObj.type = "TEXT"
			modifiedObj.fontSize = obj.fontSize || 10.5
		}else if(/TITLE/ig.test(obj.type)){
			modifiedObj.fontSize = obj.fontSize || 24
		}
		modifiedObj.index = index
		modifiedObj.text = obj.content
		modifiedObj.tagName = modifiedObj.type.toLowerCase()
		delete modifiedObj.type
		delete modifiedObj.content
		return modifiedObj
	})
}

export function generateLexicalDocumentSummary(textObjects, options = {}) {
    // default options are sensible for most purposes
    const defaults = {
        similarityThreshold: 0.5,   
        summaryLength: 0.3,         
        minSentenceLength: 10,      
        excludeTypes: ['TABLE_CELL']
    };
    
    const settings = { ...defaults, ...options };

    let sentences = extractSentences(textObjects, settings.excludeTypes);
    sentences = sentences
        .filter(sent => sent.text.length >= settings.minSentenceLength)
        .filter((sent, index, self) => 
            index === self.findIndex(s => s.text === sent.text)
        );
    const groups = groupSimilarSentences(sentences, settings.similarityThreshold);
    return generateSummaryFromGroups(groups, sentences.length, settings.summaryLength);
}

function extractSentences(textObjects, excludeTypes) {
    const sentences = [];
    
    textObjects.forEach(obj => {
        if (!excludeTypes.includes(obj.tagName)) {
            const sentenceMatches = obj.text.match(/[^.!?]+[.!?]+/g) || [];
            
            sentenceMatches.forEach(sentence => {
                sentences.push({
                    text: sentence.trim(),
                    type: obj.tagName,
                    fontSize: obj.fontSize
                });
            });
        }
    });
    
    return sentences;
}

export function calculateSimilarity(str1, str2) {
    //sentences to words array
    const words1 = str1.toLowerCase().split(/\W+/);
    const words2 = str2.toLowerCase().split(/\W+/);

    const set1 = new Set(words1); //uniqueify words
    const set2 = new Set(words2);
    
    const intersection = new Set([...set1].filter(word => set2.has(word)));
    const union = new Set([...set1, ...set2]);
    
    return intersection.size / union.size; //Jaccard
}

export function groupSimilarSentences(sentences, threshold) {
    const groups = [];
    const used = new Set();

    sentences.forEach((sentence, i) => {
        if (used.has(i)) return;
        
        const group = {
            representative: sentence,
            similar: [],
            importance: 1
        };

        sentences.forEach((compareSentence, j) => {
            if (i !== j && !used.has(j)) {
                const similarity = calculateSimilarity(
                    sentence.text,
                    compareSentence.text
                );

                if (similarity >= threshold) {
                    group.similar.push(compareSentence);
                    group.importance++;
                    used.add(j);
                }
            }
        });

        groups.push(group);
        used.add(i);
    });

    return groups.sort((a, b) => b.importance - a.importance);
}

export function generateSummaryFromGroups(groups, totalSentences, summaryRatio) {
    const targetLength = Math.ceil(totalSentences * summaryRatio);
    let summary = [];
    let currentLength = 0;

    for (const group of groups) {
        if (currentLength >= targetLength) break;
        
        summary.push({
            text: group.representative.text,
            type: group.representative.type,
            importance: group.importance
        });
        
        currentLength++;
    }

    return summary.map(e=>e.text).join("\n");
}


function parseParagraphElement(paragraph) {
	const objects = [];

	if (!paragraph.elements) {
		return objects;
	}

	let type = "PARAGRAPH";
	if (paragraph.paragraphStyle && paragraph.paragraphStyle.namedStyleType) {
		type = paragraph.paragraphStyle.namedStyleType;
	}
	
	let content = "";
	let fontSize = null;

	paragraph.elements.forEach((element) => {
		if (element.textRun) {
			content += element.textRun.content;

			if (element.textRun.textStyle && element.textRun.textStyle.fontSize) {
				const size = element.textRun.textStyle.fontSize;
				fontSize = size.magnitude || null;
			}
		}
	});

	if (content) {
		objects.push({
			type: type,
			content: content.trim(),
			fontSize: fontSize,
		});
	}

	return objects;
}

function parseTableElement(table) {
	const tableObjects = [];

	if (!table.tableRows) {
		return tableObjects;
	}

	table.tableRows.forEach((row, rowIndex) => {
		if (row.tableCells) {
			row.tableCells.forEach((cell, colIndex) => {
				if (cell.content) {
					cell.content.forEach((element) => {
						if (element.paragraph) {
							const cellObjects = parseParagraphElement(element.paragraph);
							cellObjects.forEach((obj) => {
								tableObjects.push({
									...obj,
									type: "TABLE_CELL",
									position: {
										row: rowIndex,
										column: colIndex,
									},
								});
							});
						}
					});
				}
			});
		}
	});

	return tableObjects;
}
