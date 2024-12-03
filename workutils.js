import * as Readability from "./libs/readability.max.js";
import { SentenceEmbeddingGenerator,cosineSimilarity } from "./libs/sentence-parser/index.js";
const embeddingGenerator = new SentenceEmbeddingGenerator()

export async function generateEmbeddings(objects){
	let items = []
	const embeddings = await embeddingGenerator.embed(objects.map(e=>e.text+" from "+e.title+" and url "+e.url))
	for (let index in embeddings){
		let obj = objects[index]
		obj.embedding = embeddings[index]
		obj.hash = hashEmbeddings(embeddings[index])
		items.push(obj)
	}
	return items
}

export async function generateEmbedding(sentence){
	const embeddings = await embeddingGenerator.embed([sentence])
	const embedding = embeddings[0]
	const hash = hashEmbeddings(embedding)
	return {embedding,hash}
}

export async function summarizeToDocument(text){
	const session = await chrome.aiOriginTrial.languageModel.create({
		systemPrompt:
			"You are a helpful assistant that cleans and summarizes input text. The output summary should resemble a document with a title and text broken into concise paragraphs. Clearly demarcate titles and section headings with newlines, Ensure that the output is markdown text only."
	})

	const summary = await session.prompt(
		"Summarize the below text:\n" +
		text
	);

	return summary
}

export async function summarizeText(text){
	const session = await chrome.aiOriginTrial.languageModel.create({
		systemPrompt:
			"You are a helpful assistant that cleans and summarizes input text. The output summary should have as few words as possible."
	})

	const summary = await session.prompt(
		"Summarize the below text:\n" +
		text
	);

	return summary
}

export async function summarizeArticle(items,url,title){
	let session = await chrome.aiOriginTrial.languageModel.create({
		systemPrompt:
			"You take input text to output JSON. The input text is large and unordered, your task is to summarize it in as few words as possible. The output JSON contains two fields, title and summary."
	});

	let titled = title || items[0].title || ""
	let urled = url || items[0].url || ""
	let text  = items.map(item=>{
		return item.text || ""
	}).join("")

	const summary = await session.prompt(
		"Summarize the below text:\n" +
		urled+titled+text
	);

	session = null;

	return summary
}

export async function summarizeCode(items,url,title){
	let session = await chrome.aiOriginTrial.languageModel.create({
		systemPrompt:
			"You take input text to output JSON. The input text is large and unordered, your task is to summarize it in as few words as possible. The output JSON contains two fields, title and summary."
	});

	let titled = title || items[0].title || ""
	let urled = url || items[0].url || ""
	let text  = items.map(item=>{
		return item.text || ""
	}).join("")

	const summary = await session.prompt(
		"Summarize the below text:\n" +
		urled+titled+text
	);

	session = null

	return summary
}

export async function findSimilarity(sentence,objects){
	const embeddingGenerator = new SentenceEmbeddingGenerator()
	const embedding = await embeddingGenerator.embed(sentence)
	
	return objects.map(em=>{
		em.similarity = cosineSimilarity(embedding[0],em.embedding)
		return em
	}).sort((a,b)=>{a.similarity - b.similarity})
}

export function isValidHttpsUrl(urlString) {
	try {
		const url = new URL(urlString);
		return url.protocol === "https:";
	} catch {
		return false;
	}
}

export function getReadables() {
	if (!!Readability) {
		const documentClone = document.cloneNode(true);
		const reader = new Readability(documentClone, { keepClasses: false });
		const parsed = reader.parse();
		
		return parsed;
	}
}

export function normalizeLineBreaks(text) {
	return text
			.replace(/(\r\n)+/g, "\r\n")
			.replace(/\r+/g, "\r")
			.replace(/\n+/g, "\n")
	
}

export function extractGoogleDocId(url) {
    const patterns = [
        /\/document\/d\/([a-zA-Z0-9-_]+)/,
        /\/document\/u\/\d+\/d\/([a-zA-Z0-9-_]+)/,
        /id=([a-zA-Z0-9-_]+)/,
        /^([a-zA-Z0-9-_]+)$/
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }
    return null;
}

export function filterText(obj) {
	const {text} = obj
    return (text.length > 0) && (!/^\s*$/.test(text));
}

function estimateGPTTokens(text,averageCharsPerToken = 4) {
    if (!text || typeof text !== 'string') {
        return 0;
    }

    return Math.ceil(text.length / averageCharsPerToken);
}

export function reduceTextToTokenLimit(text, targetTokens = 5400) {
    let currentTokens = estimateGPTTokens(text);
    
    if (currentTokens <= targetTokens) {
        return text;
    }

    let sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    
    sentences = sentences.map(s => s.trim())
                        .filter(s => s.length > 0);

    const frequencyMap = new Map();
    sentences.forEach(sentence => {
        frequencyMap.set(sentence, (frequencyMap.get(sentence) || 0) + 1);
    });

    let uniqueSentences = [...new Set(sentences)];

    const similarityPairs = [];
    for (let i = 0; i < uniqueSentences.length; i++) {
        for (let j = i + 1; j < uniqueSentences.length; j++) {
            const similarity = calculateSimilarity(uniqueSentences[i], uniqueSentences[j]);
            if (similarity > 0.7) { // Threshold for similarity
                similarityPairs.push({
                    index1: i,
                    index2: j,
                    similarity: similarity
                });
            }
        }
    }

    similarityPairs.sort((a, b) => b.similarity - a.similarity);
    const sentencesToRemove = new Set();
    
    similarityPairs.forEach(pair => {
        if (!sentencesToRemove.has(pair.index1) && !sentencesToRemove.has(pair.index2)) {
            const sentence1 = uniqueSentences[pair.index1];
            const sentence2 = uniqueSentences[pair.index2];
            sentencesToRemove.add(sentence1.length < sentence2.length ? pair.index1 : pair.index2);
        }
    });

    uniqueSentences = uniqueSentences.filter((_, index) => !sentencesToRemove.has(index));
    
    if (estimateGPTTokens(uniqueSentences.join(' ')) > targetTokens) {
        const sentenceScores = uniqueSentences.map((sentence, index) => ({
            sentence,
            score: calculateSentenceImportance(sentence, index, uniqueSentences.length),
            index
        }));

        sentenceScores.sort((a, b) => b.score - a.score);

        let result = [];
        let tokens = 0;
        
        for (const {sentence} of sentenceScores) {
            const sentenceTokens = estimateGPTTokens(sentence);
            if (tokens + sentenceTokens <= targetTokens) {
                result.push(sentence);
                tokens += sentenceTokens;
            } else {
                break;
            }
        }

        result.sort((a, b) => {
            return uniqueSentences.indexOf(a) - uniqueSentences.indexOf(b);
        });

        return result.join(' ');
    }

    return uniqueSentences.join(' ');
}


function calculateSimilarity(str1, str2) {
    const words1 = str1.toLowerCase().split(/\W+/);
    const words2 = str2.toLowerCase().split(/\W+/);
    
    const set1 = new Set(words1);
    const set2 = new Set(words2);
    
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    
    const union = new Set([...set1, ...set2]);
    return intersection.size / union.size;
}

function calculateSentenceImportance(sentence, position, totalSentences) {
    let score = 0;

    const positionScore = position < totalSentences * 0.2 || position > totalSentences * 0.8 ? 2 : 1;
    const lengthScore = sentence.length > 40 ? 1.5 : 1;
    
    const hasKeyPhrases = /important|key|significant|conclude|summary|therefore/i.test(sentence);
    const keyPhraseScore = hasKeyPhrases ? 2 : 1;
    
    score = positionScore * lengthScore * keyPhraseScore;
    return score;
}


export function extractGooglePresentationId(url) {
    const patterns = [
        /\/presentation\/d\/([a-zA-Z0-9-_]+)/, 
        /\/presentation\/u\/\d+\/d\/([a-zA-Z0-9-_]+)/,
        /id=([a-zA-Z0-9-_]+)/,
        /^([a-zA-Z0-9-_]+)$/
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }
    return null;
}

export async function updateCounter(newCounter,tabId){
	let {counter} = await chrome.storage.session.get(["counter"]) || {counter: 0}
	chrome.storage.session.set({ counter: newCounter})

	const safeCounter = Math.min(Math.max(0, parseInt(newCounter)), 1000);
    
    const colorPalette = {
        0:  '#e5e5e5',  
        100: '#1a73e8',  
        200: '#ea4335',  
        300: '#34a853',  
        400: '#fbbc04',  
        500: '#9c27b0',  
        600: '#ff6d01',  
        700: '#0097a7',  
        800: '#ff4081',  
        900: '#4caf50',  
        1000: '#2962ff'  
    };

	const color = colorPalette[Math.floor(safeCounter / 100) * 100]
	
	chrome.action.setBadgeText({
		text: newCounter.toString(),
		tabId: tabId,
	})
	chrome.action.setBadgeBackgroundColor({ color });
	return newCounter
}

function normalizeWhitespace(text) {
    return text
        .replace(/[\s\r\n]+/g, ' ')    // Convert all whitespace sequences to single space
        .trim();                        // Remove leading/trailing whitespace
}

export async function summarizeArbitraryWebsiteContent(textContent,url){
	if(!chrome.aiOriginTrial || !chrome.aiOriginTrial.languageModel){
		throw new Error("AI Origin Trial is not available")
	}

	const capabilities = await chrome.aiOriginTrial.languageModel.capabilities()

	if(!capabilities.available == "readily"){
		throw new Error("Language model is not available")
	}

	let text = normalizeWhitespace(textContent)
	let tokens = estimateGPTTokens(text)
	let attempts = 0

	while(tokens > 5400 && attempts < 3){
		text = reduceTextToTokenLimit(text)
		tokens = estimateGPTTokens(text)
		attempts++
	}

	if(tokens > 5400){
		text = text.slice(0,5400 * 4) //XXX: last ditch attempt to prevent overloading the LLM
	}
	
	let session = await chrome.aiOriginTrial.languageModel.create({
		systemPrompt:
			"You take input text scraped from a website and clean and summarize it. The text can have multiple newlines, tabs and whitespaces that need to be cleaned. Summarize in as few sentences as possible.",
	});

	const output = await session.prompt(
		`Summarize the below text from the website ${url} in as few words as possible:\n` +
			text
	);

	session = null

	return output
}

export async function analyzeQuery(tabId,question,candidates) {
	if(!chrome.aiOriginTrial || !chrome.aiOriginTrial.languageModel){
		return
	}
	
	let session = await chrome.aiOriginTrial.languageModel.create({
		systemPrompt:
			`Limit yourself to only the context provided below to answer the question given by the user. Output should be in JSON only. The output JSON should contain two fields, answer and index. The answer should contain at maximum 50 words. The index field contains the index of the list element contributing most to the answer. Context: \n${JSON.stringify(candidates.slice(0, 5))}`,
	});

	const stream = session.promptStreaming(
		`Find the best match in the context provided to: ${question}`
	);

	let lastChunk = undefined
	
	for await (const chunk of stream) {
		//TODO: send message back to content handler with updated chunk
		lastChunk = chunk
		const response = await chrome.tabs.sendMessage(tabId, {
			action: 'updateSearch',
			command: 'update-search-stream',
			text: chunk
		})
	}

	session = null
	return lastChunk
}

export function hashEmbeddings(floatArray) {
    if (!Array.isArray(floatArray) || floatArray.length !== 512) {
        throw new Error('Input must be an array of 512 floats');
    }

    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; //maybe add more letters to hash later
    const prime = 31;
    const result = new Array(32);

    const buffer = new Float64Array(64);

    for (let i = 0; i < 512; i++) {
        const float = floatArray[i];
        if (!Number.isFinite(float)) continue;
        
        const bucket = i % 64;
        buffer[bucket] += float * Math.sin(float * prime) * Math.cos(float);
    }
    
    for (let i = 0; i < 32; i++) {
        const v1 = buffer[i * 2];
        const v2 = buffer[i * 2 + 1];
        
        const combined = Math.sin(v1 * prime) * Math.cos(v2 * prime) * 
                        Math.tan((v1 + v2) * Math.E) * 
                        Math.sin((v1 * v2) * Math.PI);
        
        const index = Math.abs(Math.floor(combined * 1000000)) % chars.length;
        result[i] = chars[index];
    }
    
    return result.join('');
}

export function parseOutputs(text) {
	try {
	  text = text.replace(/json\s*/g, '');
	  text = text.replace(/`/g,'');
  
	  // TODO: common JSON formatting issues
	  text = text
		.trim();
  
	  const parsed = JSON.parse(text);
	  return parsed;
	} catch (error) {
	  console.error('Failed to parse LLM output to JSON:', error);
	  console.error('Original text:', text);
	  return null;
	}
}

export function parseMarkdown(markdown) {
    try {
        if (typeof markdown !== 'string') {
            throw new Error('Input must be a string');
        }

        const result = parseMarkdownToJson(markdown);

        result.forEach((item, index) => {
            if (!item.tagName || !['heading', 'title', 'text'].includes(item.tagName)) {
                throw new Error(`Invalid tagName at index ${index}`);
            }
            if (typeof item.title !== 'string' || typeof item.text !== 'string') {
                throw new Error(`Invalid title or text at index ${index}`);
            }
        });

        return result;
    } catch (error) {
        console.error('Error parsing markdown:', error);
        throw error;
    }
}

export function parseMarkdownToJson(markdown) {
    // Split into lines and remove empty lines
    const lines = markdown.split('\n').filter(line => line.trim());
    const result = [];
    let currentTitle = '';
    let currentTagName = 'text';

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        let lineObject = {
            title: currentTitle,
            text: line,
            tagName: currentTagName
        };

        // Check if line is a heading with # symbols
        const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
        if (headingMatch) {
            currentTitle = headingMatch[2].trim();
            currentTagName = 'title';
            lineObject = {
                title: currentTitle,
                text: line,
                tagName: currentTagName
            };
        }
        // Check if line is a bold text heading
        else if (line.match(/^\*\*(.+?)\*\*$/)) {
            currentTitle = line.replace(/\*\*/g, '').trim();
            currentTagName = 'heading';
            lineObject = {
                title: currentTitle,
                text: line,
                tagName: currentTagName
            };
        }
        // Regular text line
        else {
            lineObject = {
                title: currentTitle, // Keep the last known title
                text: line,
                tagName: 'text'
            };
        }

        result.push(lineObject);
    }

    return result;
}
