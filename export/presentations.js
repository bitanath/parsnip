const createEmptyPresentation = async (title, authToken) => {
	const response = await fetch(
		"https://slides.googleapis.com/v1/presentations",
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${authToken}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title }),
		}
	);

	if (!response.ok) {
		throw new Error(`Failed to create presentation: ${response.status}`);
	}

	return response.json();
};

const updatePresentation = async (presentationId, requests, authToken) => {
	const response = await fetch(
		`https://slides.googleapis.com/v1/presentations/${presentationId}:batchUpdate`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${authToken}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ requests }),
		}
	);

	if (!response.ok) {
		throw new Error(`Failed to update presentation: ${response.status}`);
	}

	return response.json();
};

const createSlide = (pageId) => ({
	createSlide: {
		objectId: pageId,
		slideLayoutReference: {
			predefinedLayout: "BLANK",
		},
	},
});

const createTextBox = (pageId, text, style, index) => {
    const YTranslate = style === "title" ? 10 : style === "heading" ? 25 : 50
	const textBox = {
		createShape: {
			objectId: `${pageId}_${style}_${index}`,
			shapeType: "TEXT_BOX",
			elementProperties: {
				pageObjectId: pageId,
				size: {
					width: { magnitude: 600, unit: "PT" },
					height: { magnitude: 50, unit: "PT" },
				},
				transform: {
					scaleX: 1,
					scaleY: 1,
					translateX: 50,
					translateY: YTranslate + (index * 50),
					unit: "PT",
				},
			},
		},
	};

	const textStyle = {
		insertText: {
			objectId: `${pageId}_${style}_${index}`,
			text,
		},
	};

	const styleUpdate = {
		updateTextStyle: {
			objectId: `${pageId}_${style}_${index}`,
			style: {
				fontSize: {
					magnitude: style === "title" ? 40 : style === "heading" ? 24 : 14,
					unit: "PT",
				},
				fontFamily: "Arial",
				bold: style === "title" || style === "heading",
			},
			textRange: {
				type: "ALL",
			},
			fields: "fontSize,fontFamily,bold",
		},
	};

	return [textBox, textStyle, styleUpdate];
};

const convertJsonToRequests = (jsonData) => {
	const requests = [];
	let currentSlideId = null;
	let slideIndex = 0;
    let textWithoutNewSlide = 0
	jsonData.forEach((item, index) => {
		let { tagName, text } = item;

		if (tagName === "title" || tagName === "heading" || index == 0 || textWithoutNewSlide > 3) {
			text = text.replace(/#/ig,"").replace(/\*\*/ig,"")
			currentSlideId = `slide_${slideIndex}`;
			requests.push(createSlide(currentSlideId));
            textWithoutNewSlide = 0;
			slideIndex++;
		}

        textWithoutNewSlide++;
		if (currentSlideId) {
			const contentRequests = createTextBox(currentSlideId, text, tagName, textWithoutNewSlide);
			requests.push(...contentRequests);
		}
	});

	return requests;
};


const createGoogleSlides = async (jsonData, title, authToken) => {
	try {
		const { presentationId } = await createEmptyPresentation(title, authToken);

		const requests = convertJsonToRequests(jsonData);
		await updatePresentation(presentationId, requests, authToken);

		return presentationId;
	} catch (error) {
		console.error("Export failed:", error);
		throw error;
	}
};

export const exportToGooglePresentations = async (content,title) => {
	const { authToken } = await chrome.storage.local.get("authToken");

	try {
		const presentationId = await createGoogleSlides( content, title, authToken );
		return `https://docs.google.com/presentation/d/${presentationId}`;
	} catch (error) {
		console.error("Export failed:", error);
	}
};
