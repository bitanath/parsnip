async function writeMarkdownToDrive(accessToken, markdownContent, fileName = 'document.md') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fullFileName = `${fileName.replace('.md', '')}_${timestamp}.md`;

    try {
        const metadata = {
            name: fullFileName,
            mimeType: 'text/markdown'
        };

        const initResponse = await fetch('https://www.googleapis.com/drive/v3/files', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(metadata)
        });

        if (!initResponse.ok) {
            throw new Error(`Failed to initialize file: ${initResponse.status} ${initResponse.statusText}`);
        }

        const fileData = await initResponse.json();
        const fileId = fileData.id;
        const contentResponse = await fetch(
            `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'text/markdown'
                },
                body: markdownContent
            }
        );

        if (!contentResponse.ok) {
            throw new Error(`Failed to upload content: ${contentResponse.status} ${contentResponse.statusText}`);
        }

        const urlResponse = await fetch(
            `https://www.googleapis.com/drive/v3/files/${fileId}?fields=webViewLink`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }
        );

        if (!urlResponse.ok) {
            throw new Error(`Failed to get file URL: ${urlResponse.status} ${urlResponse.statusText}`);
        }

        const urlData = await urlResponse.json();
        return {
            url: urlData.webViewLink,
            fileId: fileId
        };

    } catch (error) {
        console.error('Error in writeMarkdownToDrive:', error);
        throw error;
    }
}


export async function createMarkdownInDrive(markdownContent) {
    try {
        const { authToken } = await chrome.storage.local.get("authToken");
        const result = await writeMarkdownToDrive(authToken, markdownContent);
        return result.url;
    } catch (error) {
        console.error('Failed to save document:', error);
        throw error;
    }
}