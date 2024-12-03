import {generateLexicalDocumentSummary} from "./documents.js"

export async function getGoogleSlide(presentationId) {
	try {
		const token = await chrome.storage.local.get("authToken"); // Get the OAuth token
		const response = await fetch(
			`https://slides.googleapis.com/v1/presentations/${presentationId}`,
			{
				headers: {
					Authorization: `Bearer ${token.authToken}`,
					"Content-Type": "application/json",
				},
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const presentation = await response.json();
		const parsedContent = parseSlideContent(presentation);
        const textContent = generateLexicalDocumentSummary(parsedContent);
		const title = presentation.title;
        const content = parsedContent
		return {title,content,textContent}
	} catch (error) {
		console.error("Error fetching presentation:", error);
		throw error;
	}
}

function parseSlideContent(presentation) {
	const textObjects = [];

	textObjects.push({
		type: "PRESENTATION_TITLE",
		content: presentation.title || "",
		fontSize: null,
		slideNumber: 0,
	});

	if (!presentation.slides) {
		return textObjects;
	}

	presentation.slides.forEach((slide, slideIndex) => {
		if (!slide.pageElements) return;

		slide.pageElements.forEach((element) => {
			if (element.shape && element.shape.text) {
				const textElements = parseShapeText(element.shape.text, slideIndex + 1);
				textObjects.push(...textElements);
			}
		});
	});

	return textObjects.filter((obj) => obj.content && obj.content.trim() !== "").map((obj,index)=>{
        let modifiedObj = JSON.parse(JSON.stringify(obj))
		if(/HEADING/ig.test(obj.type)){
			modifiedObj.type = "HEADING"
			modifiedObj.fontSize = obj.fontSize || 18
		}else if(/BODY/ig.test(obj.type)){
			modifiedObj.type = "TEXT"
			modifiedObj.fontSize = obj.fontSize || 10.5
		}else if(/TITLE/ig.test(obj.type)){
			modifiedObj.fontSize = obj.fontSize || 32
		}
		modifiedObj.index = index
		modifiedObj.text = obj.content
		modifiedObj.tagName = modifiedObj.type.toLowerCase()
		delete modifiedObj.type
		delete modifiedObj.content
		return modifiedObj
    });
}

function parseShapeText(textContent, slideNumber) {
	const textObjects = [];

	if (!textContent.textElements) {
		return textObjects;
	}

	let currentParagraph = {
		type: "BODY",
		content: "",
		fontSize: null,
		slideNumber: slideNumber,
	};

	textContent.textElements.forEach((element) => {
		if (element.textRun) {
			const text = element.textRun.content;
			const style = element.textRun.style || {};

			let type = determineTextType(style);

			let fontSize = null;
			if (style.fontSize && style.fontSize.magnitude) {
				fontSize = style.fontSize.magnitude;
			}

			if (
				type !== currentParagraph.type ||
				fontSize !== currentParagraph.fontSize
			) {
				if (currentParagraph.content.trim()) {
					textObjects.push({ ...currentParagraph });
				}

				currentParagraph = {
					type: type,
					content: text,
					fontSize: fontSize,
					slideNumber: slideNumber,
				};
			} else {
				currentParagraph.content += text; //TODO Append to current paragraph
			}
		}
	});

	if (currentParagraph.content.trim()) {
		textObjects.push(currentParagraph);
	}

	return textObjects;
}

function determineTextType(style) {
	if (style.fontSize && style.fontSize.magnitude) {
		const size = style.fontSize.magnitude;

		if (size >= 40) return "TITLE";
		if (size >= 24) return "HEADING";
		if (size >= 18) return "SUBHEADING";
	}

	if (style.bulletStyle) {
		return "BULLET_POINT";
	}
	return "BODY";
}
