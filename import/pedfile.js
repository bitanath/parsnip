import * as pdfjsMin from "../libs/pdfjs.min.js";
import { WorkerMessageHandler } from "../libs/pdfjs.worker.js";
import { generateLexicalDocumentSummary } from "./documents.js";

async function fetchPdfAsArrayBuffer(url) {
	try {
		const response = await fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/pdf",
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		
		const arrayBuffer = await response.arrayBuffer();
		return arrayBuffer;
	} catch (error) {
		console.error("Error fetching PDF:", error);
		throw error;
	}
}

export async function extractPdfText(fileUrl) {
	try {
		const data = await fetchPdfAsArrayBuffer(fileUrl);
		
		pdfjsMin.GlobalWorkerOptions.workerSrc =
			chrome.runtime.getURL("./libs/pdfjs.worker.js");
		const pdf = await pdfjsMin.getDocument({ data }).promise;
		const meta = await pdf.getMetadata();

		const textItems = [];

		for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
			const page = await pdf.getPage(pageNum);
			const content = await page.getTextContent();

			const lineMap = new Map();

			content.items.forEach((item) => {
				if (!item.str.trim()) return;


				const y = Math.round(item.transform[5]);
				const fontSize = Math.abs(item.transform[0]);

				if (!lineMap.has(y)) {
					lineMap.set(y, {
						text: item.str,
						fontSize: fontSize,
						x: item.transform[4], // Keep track of x position for sorting
						items: [item],
					});
				} else {
					const line = lineMap.get(y);
					line.items.push(item);
					
					line.items.sort((a, b) => a.transform[4] - b.transform[4]);
					line.text = line.items.map((i) => i.str).join(" ");
					line.fontSize = Math.abs(line.items[0].transform[0]);
				}
			});

			const sortedLines = Array.from(lineMap.values())
			// .sort(
			// 	(a, b) => b.fontSize - a.fontSize
			// ); //TODO: Possibly do not sort these lines in order to preserve text order

			sortedLines.forEach((line,i) => {
				if (line.text.trim()) {
					let type = "text";
					const fontSize = line.fontSize || 12;

					if (fontSize >= 24) {
						type = "title";
					} else if (fontSize >= 16) {
						type = "heading";
					} 
					
					textItems.push({
						text: line.text.trim(),
						fontSize: Math.round(fontSize),
						tagName: type,
						page: pageNum,
                        index: i
					});
				}
			});
		}

		let textContent = generateLexicalDocumentSummary(textItems)
		let title = meta.info.title || textItems.filter(t=>/title/ig.test(t.text))[0] || "PDF Document"
		
		return {title,textContent,content:textItems};

	} catch (error) {
		console.error("Error extracting PDF text:", error);
		throw error;
	}
}

