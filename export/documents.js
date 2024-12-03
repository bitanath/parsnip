const createEmptyDoc = async (title, authToken) => {
	const response = await fetch("https://docs.googleapis.com/v1/documents", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${authToken}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ title }),
	});

	if (!response.ok) {
		throw new Error(`Failed to create document: ${response.status}`);
	}

	return response.json();
};

const updateDocument = async (documentId, requests, authToken) => {
	const response = await fetch(
		`https://docs.googleapis.com/v1/documents/${documentId}:batchUpdate`,
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
		throw new Error(`Failed to update document: ${response.status}`);
	}

	return response.json();
};

const createTextInsert = (text, index) => ({
	insertText: {
		location: { index },
		text: text + "\n",
	},
});

const createHeadingStyle = (startIndex, endIndex) => ({
	updateParagraphStyle: {
		range: { startIndex, endIndex },
		paragraphStyle: {
			namedStyleType: "HEADING_1",
			alignment: "START",
		},
		fields: "namedStyleType,alignment",
	},
});

const createTextStyle = (startIndex, endIndex) => ({
	updateParagraphStyle: {
		range: { startIndex, endIndex },
		paragraphStyle: {
			namedStyleType: "NORMAL_TEXT",
			alignment: "START",
		},
		fields: "namedStyleType,alignment",
	},
});

const convertJsonToRequests = (jsonData) => {
	let currentIndex = 1;
	const requests = [];

	jsonData.forEach(({ tagName, text }) => {
		if (/heading|title/gi.test(tagName)) {
            const heading = text.replace(/#/ig,"").replace(/\*\*/ig,"")
			requests.push(createTextInsert(heading, currentIndex));
			requests.push(
				createHeadingStyle(currentIndex, currentIndex + heading.length)
			);
			currentIndex += heading.length + 1;
		}
		else {
			requests.push(createTextInsert(text, currentIndex));
			requests.push(createTextStyle(currentIndex, currentIndex + text.length));
			currentIndex += text.length + 1;
		}
	});

	return requests;
};


export const exportToGoogleDocs = async (jsonData, title) => {
	try {
		const { authToken } = await chrome.storage.local.get("authToken");

		const { documentId } = await createEmptyDoc(title, authToken);
		const requests = convertJsonToRequests(jsonData);

		await updateDocument(documentId, requests, authToken);

		return `https://docs.google.com/document/d/${documentId}`;
	} catch (error) {
		console.error("Export failed:", error);
		throw error;
	}
};
