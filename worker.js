import {
	filterText,
	getReadables,
	analyzeQuery,
	updateCounter,
	isValidHttpsUrl,
	generateEmbedding,
	generateEmbeddings,
	extractGoogleDocId,
	extractGooglePresentationId,
	summarizeArbitraryWebsiteContent,
	parseOutputs
} from "./workutils.js";

import { getGoogleDoc } from "./import/documents.js";
import { getGoogleSlide } from "./import/presentations.js";
import { extractCodeFromGithub } from "./import/github.js";
import { extractPdfText } from "./import/pedfile.js";
import { VectorDB } from "./vectordb.js";
import { StorageDB } from "./storagedb.js";

let vectorStorage = new VectorDB()
let scalarStorage = new StorageDB()

function getAuthToken() {
	return new Promise((resolve, reject) => {
	  chrome.identity.getAuthToken({ interactive: true }, function(token) {
		if (chrome.runtime.lastError) {
		  console.error('Auth error:', chrome.runtime.lastError);
		  reject(chrome.runtime.lastError);
		} else {
		  chrome.storage.local.set({ 'authToken': token });
		  resolve(token);
		}
	  });
	});
}

chrome.runtime.onInstalled.addListener(async () => {
	await chrome.storage.session.set({counter:0})
	await getAuthToken() //Get auth token interactively as soon as the extension is installed
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
	scalarStorage.getAll().then(obj=>{
		let total = Object.keys(obj).length
		updateCounter(total,activeInfo.tabId).then(done=>{
			console.log("Updated badge text on activating extensions")
		})
	})
	
});


chrome.commands.onCommand.addListener((command) => {
	if (/tab-search/ig.test(command)) {
	  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		if (tabs[0]) {
		  chrome.tabs.sendMessage(tabs[0].id, {
			action: "keyboardShortcut",
			command: command
		  });
		}
	  });
	}
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
	try{
		if (changeInfo.status === "complete" && tab.url && isValidHttpsUrl(tab.url)) {
			let parsedDoc = undefined
			//NOTE: Every parsed document should be an array of text including summary, url, title and text -> this creates a structured DOC
			
			if(/docs\.google\.com\/document\//ig.test(tab.url)){
				parsedDoc = await getGoogleDoc(extractGoogleDocId(tab.url))
			}
			else if(/docs\.google\.com\/presentation\//ig.test(tab.url)){
				parsedDoc = await getGoogleSlide(extractGooglePresentationId(tab.url))
			}
			else if(/github\.com/ig.test(tab.url) && /\/blob|tree\//ig.test(tab.url) && !/README/ig.test(tab.url)){
				parsedDoc = await extractCodeFromGithub(tab.url)
			}
			else if(/\.pdf$/ig.test(tab.url)){
				parsedDoc = await extractPdfText(tab.url)
			}else{
				//TODO: Otherwise generically process a webpage and return text content from readability 
				const results = await chrome.scripting.executeScript({ target: { tabId }, function: getReadables});
				if(!(results || results[0])){throw new Error("Cannot parse webpage. Fail Gracefully")}
				const {result} = results[0];
				parsedDoc = result
			}

			if(!parsedDoc){throw new Error("Could not classify and parse webpage. Fail Gracefully.")}

			const {title,content,textContent} = parsedDoc
			
			const summary = await summarizeArbitraryWebsiteContent(textContent,tab.url)
			
			let doc = content.map(c=>{
				c.url = tab.url
				c.summary = summary
				c.title = title
				c.tabid = tabId
				return c
			}).filter(filterText)
			
			const embeddings = await generateEmbeddings(doc)
			let successes = []
			//TODO: now with the returned embeddings and hashes, store them all in Vector DB and in the chrome extension, and add to counter
			for(const element of embeddings){
				const {hash,embedding,text} = element
				const added = await vectorStorage.storeVector({
					id: hash,
					vector: embedding,
					metadata: element
				})
				successes.push(added)
			}

			console.log("Got embeddings",embeddings)

			if(successes.filter(e=>e).length > 0){
				const allSearches = await scalarStorage.getAll()
				updateCounter(Object.keys(allSearches).length,tabId)
			}
		}
	}catch(e){
		console.error(e)
	}
});


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.action === "check-open") {
		sendResponse(sender.tab.id);
	} else if(message.action === "send-open"){
		const tabId = parseInt(message.tabId)
		
		chrome.tabs.update(tabId, { active: true }, () => {
            chrome.tabs.get(tabId, (tab) => {
                chrome.windows.update(tab.windowId, { focused: true });
				sendResponse("Done");
            });
        });
		return true;
	} else if(message.action === "done-search"){
		scalarStorage.getAll().then(objs=>{
			updateCounter(Object.keys(objs).length,sender.tab.id).then(count=>{
				console.log("Got new counter with count ",count)
			})
		})
	}
	else if (message.action === "search-things") {
		const {data} = message
		generateEmbedding(data).then(({hash,embedding})=>{
			return vectorStorage.findSimilar(embedding,5,0.25)
		}).then(candidates=>{
			if(!candidates || candidates.length < 1){
				return sendResponse({
					summary: "Unable to find anything that matched your question. Maybe rephrase and try again?",
					citation: "Unable to find any sources that matched your question. Maybe rephrase and try again?"
				})
			}

			let mapped = candidates.map((el,i)=>{
				const {id,metadata} = el
				const {text,tabid} = metadata
				return {id,text,tabid,index:i}
			})

			analyzeQuery((sender.tab || {id:null}).id,data,mapped).then(outputs=>{
				const json = parseOutputs(outputs)
				let {answer,index} = json
				if(index >= mapped.length){index = 0}
				if(index < 0 || !index){index = 0}
				const hash = mapped[index].id
				const candidate = candidates.filter(c=>c.id == hash)[0]
				const related = candidates.filter(c=>c.id != hash).sort((a,b)=>b.similarity - a.similarity).map(r=>r.metadata).map(m=>{
					delete m.hash
					delete m.embedding
					return m
				}).slice(0,3)
				
				delete candidate.metadata.embedding
				delete candidate.metadata.hash

				const obj = {...candidate.metadata,question:data,answer:answer,related:related}

				scalarStorage.save({id:hash,object:obj}).then(saved=>{
					sendResponse({answer,related,source:candidate.metadata})
				})
			})

		}).catch(e=>{
			return sendResponse({
					summary: "Errored out while trying to find the answer to your question.",
					citation: "This might be an issue with your version of Chrome. Please check if your models are downloaded correctly.",
					error: e
			})
		})
	}
	return true;
});


chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
