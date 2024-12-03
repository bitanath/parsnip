import { html, store } from "../libs/hybrids.js";
import { selected } from "./list.js";
import { StorageDB } from "../storagedb.js";
import { exportToGoogleDocs } from "../export/documents.js";
import { exportToGooglePresentations } from "../export/presentations.js";
import { createMarkdownInDrive } from "../export/markdown.js";
import { summarizeToDocument } from "../workutils.js";
import { parseMarkdown } from "../workutils.js";

const storage = new StorageDB()

async function clickedElement(host,ev){
    //TODO: Operate based on selection
    if(!selected || selected.length < 1){return}
    let points = []
    let operation = ev.currentTarget.id
    for(const selection of selected){
        const identifier = selection.split("-")[1]
        points.push(identifier)
    }
    
    const selectedItems = await storage.getByIds(points) //get all selected items identified
    if(Object.keys(selectedItems).length < 1){
        return
    }
    if(/delete/ig.test(operation)){
        await storage.deleteByIds(points)
        const sidePanel = document.querySelector('side-panel')
        if(!sidePanel){return}
        const itemList = sidePanel.shadowRoot.querySelector('item-list')
        if(!itemList){return}
        const newItems = await storage.getAll()
        itemList.items = Object.values(newItems)
    }
    else if(/doc|slide|keep/ig.test(operation)){
        //TODO: summarize and create a google doc
        toggleLoading()
        
        let arr = []
        for (const [key, value] of Object.entries(selectedItems)) {
            const {question,text,related} = value
            const relatedText = related.map(r=>r.text).join("\n")
            const content = `${question}\n${text}\n${relatedText}`
            arr.push(content)
        } 
        let textToDocumentize = arr.join("\n")
        const docText = await summarizeToDocument(textToDocumentize)
        const functionToExecute = /doc/i.test(operation) ? exportToGoogleDocs : /slide/i.test(operation) ? exportToGooglePresentations : null
        if(!functionToExecute){
            const url = await createMarkdownInDrive(docText)
            toggleLoading()
            chrome.tabs.create({ 
                url: url,
                active: true
            });
        }else{
            const parsedJson = parseMarkdown(docText)
            if(!parsedJson || parsedJson.length < 1){throw new Error("Unable to parse text to JSON")}
            const {title} = parsedJson[0]
            const url = await functionToExecute(parsedJson,title)
            toggleLoading()
            chrome.tabs.create({ 
                url: url,
                active: true
            });
        }
    }

}

function toggleLoading(){
    const sidePanel = document.querySelector('side-panel')
        if(sidePanel){
            const exportBar = sidePanel.shadowRoot.querySelector("export-bar")
            if(exportBar){
                const collapsible = exportBar.shadowRoot.querySelector(".collapsible")
                if(collapsible){
                    collapsible.classList.contains("loading") ? collapsible.classList.remove("loading") : collapsible.classList.add("loading")
                }
            }
        }
}

export const Export = {
    tag: "export-bar",
    render: () => html`
        <div class="collapsible box polka-dot-dense">
            <details>
                <summary>(export or delete selected snippets)</summary>
                <div class="content">
                    <h-stack gap="10px" justify="center">
                        <button
                            id="delete-selected",
                            title="Delete All Snippets"
                            class="btn-destructive"
                            onclick="${clickedElement}"
                        >
                            <trash-icon/>
                            Delete All
                        </button>
                        <button
                            id="export-doc",
                            title="Google Doc"
                            class="btn-doc"
                            onclick="${clickedElement}"
                        >
                            <doc-icon/>
                            Google Doc
                        </button>
                        <button
                            id="export-slide",
                            title="Google Slide"
                            class="btn-slide"
                            onclick="${clickedElement}"
                        >
                            <slide-icon/>
                            Google Slide
                        </button>
                        <button
                            id="export-keep",
                            title="Markdown"
                            class="btn-secondary"
                            onclick="${clickedElement}"
                        >
                            <markdown-icon/>
                            Download Markdown
                        </button>
                    </h-stack>
                </div>
            </details>
        </div>
        `.css`
        .polka-dot-dense {
            background: 
                radial-gradient(#00000011 3px, transparent 4px),
                radial-gradient(#00000011 3px, transparent 4px);
            background-color: #ffffff;
            background-position: 0 0, 10px 10px;
            background-size: 20px 20px;
        }
    
        .collapsible {
            margin: 10px;
        }

        .loading{
            filter: grayscale(1);
        }
    
        .box{
            box-shadow: 1px 2px 0px 4px rgba(0,0,0,1);
            border-radius: 10px;
            padding: 8px 12px 8px 12px;
            margin: 16px 6px;
            background-color: white;
        }
    
        .content {
            padding: 15px;
            border-top: 1px solid #ccc;
        }
    
        summary {
            cursor: pointer;
            font-weight: 300;
            font-style: italic;
        }
    
        summary::-webkit-details-marker {
            display: none;
        }
    
        summary::after {
            content: '+';
            float: right;
            font-weight: bold;
            font-style: normal;
            transition: transform 0.3s;
        }
    
        details[open] summary::after {
            transform: rotate(45deg);
        }
    
        button {
            position: relative;
            display: inline-block;
            cursor: pointer;
            outline: none;
            border: 0;
            vertical-align: middle;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            width: 48px;
            height: 36px;
            margin-top: 2px;
            line-height: 0;
        }
        
        button.btn-doc {
            font-weight: 600;
            color: #ffffff;
            text-transform: uppercase;
            padding: 1.25em 0;
            background: #00838f;  /* Cyan 800 */
            border: 2px solid #006064;  /* Cyan 900 */
            border-radius: 0.75em;
            transform-style: preserve-3d;
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
        } 
        
        button.btn-doc::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #0097a7;  /* Cyan 700 */
            border-radius: inherit;
            box-shadow: 0 0 0 2px #006064, 0 0.125em 0 0 #00acc1;  /* Cyan 900 and Cyan 600 */
            transform: translate3d(0, 0.75em, -1em);
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
        }
        
        button.btn-doc:hover {
            background: #0097a7;  /* Cyan 700 */
            transform: translate(0, 0.25em);
        }
        
        button.btn-doc:hover::before {
            box-shadow: 0 0 0 2px #006064, 0 0.125em 0 0 #00acc1;
            transform: translate3d(0, 0.5em, -1em);
        }
        
        button.btn-doc:active {
            background: #0097a7;  /* Cyan 700 */
            transform: translate(0em, 0.75em);
        }
        
        button.btn-doc:active::before {
            box-shadow: 0 0 0 2px #006064, 0 0 #00acc1;
            transform: translate3d(0, 0, -1em);
        }
        
        button.btn-slide {
            font-weight: 600;
            color: #ffffff;
            text-transform: uppercase;
            padding: 1.25em 0;
            background: #fbc02d;  /* Yellow 700 */
            border: 2px solid #f57f17;  /* Yellow 900 */
            border-radius: 0.75em;
            transform-style: preserve-3d;
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
        }
        
        button.btn-slide::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #fdd835;  /* Yellow 600 */
            border-radius: inherit;
            box-shadow: 0 0 0 2px #f57f17, 0 0.125em 0 0 #ffd54f;  /* Yellow 900 and Yellow 300 */
            transform: translate3d(0, 0.75em, -1em);
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
        }
        
        button.btn-slide:hover {
            background: #fdd835;  /* Yellow 600 */
            transform: translate(0, 0.25em);
        }
        
        button.btn-slide:hover::before {
            box-shadow: 0 0 0 2px #f57f17, 0 0.125em 0 0 #ffd54f;
            transform: translate3d(0, 0.5em, -1em);
        }
        
        button.btn-slide:active {
            background: #fdd835;  /* Yellow 600 */
            transform: translate(0em, 0.75em);
        }
        
        button.btn-slide:active::before {
            box-shadow: 0 0 0 2px #f57f17, 0 0 #ffd54f;
            transform: translate3d(0, 0, -1em);
        }   
        
        button.btn-keep {
            font-weight: 600;
            color: #ffffff;
            text-transform: uppercase;
            padding: 1.25em 0;
            background: #f9a825;  /* Yellow 800 */
            border: 2px solid #f57f17;  /* Yellow 900 */
            border-radius: 0.75em;
            transform-style: preserve-3d;
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
        }
        
        button.btn-keep::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #fbc02d;  /* Yellow 700 */
            border-radius: inherit;
            box-shadow: 0 0 0 2px #f57f17, 0 0.125em 0 0 #fdd835;  /* Yellow 900 and Yellow 600 */
            transform: translate3d(0, 0.75em, -1em);
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
        }
        
        button.btn-keep:hover {
            background: #fbc02d;  /* Yellow 700 */
            transform: translate(0, 0.25em);
        }
        
        button.btn-keep:hover::before {
            box-shadow: 0 0 0 2px #f57f17, 0 0.125em 0 0 #fdd835;  /* Yellow 900 and Yellow 600 */
            transform: translate3d(0, 0.5em, -1em);
        }
        
        button.btn-keep:active {
            background: #fbc02d;  /* Yellow 700 */
            transform: translate(0em, 0.75em);
        }
        
        button.btn-keep:active::before {
            box-shadow: 0 0 0 2px #f57f17, 0 0 #fdd835;  /* Yellow 900 and Yellow 600 */
            transform: translate3d(0, 0, -1em);
        }        
    
        button.btn-secondary {
            font-weight: 600;
            color: #ffffff;
            text-transform: uppercase;
            padding: 1.25em 0;
            background: #455a64;  /* Cool gray/slate */
            border: 2px solid #37474f;  /* Darker gray border */
            border-radius: 0.75em;
            transform-style: preserve-3d;
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
        }
        
        button.btn-secondary::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #546e7a;  /* Slightly lighter gray */
            border-radius: inherit;
            box-shadow: 0 0 0 2px #37474f, 0 0.125em 0 0 #607d8b;  /* Shadow colors */
            transform: translate3d(0, 0.75em, -1em);
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
        }
        
        button.btn-secondary:hover {
            background: #546e7a;  /* Lighter gray on hover */
            transform: translate(0, 0.25em);
        }
        
        button.btn-secondary:hover::before {
            box-shadow: 0 0 0 2px #37474f, 0 0.125em 0 0 #607d8b;
            transform: translate3d(0, 0.5em, -1em);
        }
        
        button.btn-secondary:active {
            background: #546e7a;
            transform: translate(0em, 0.75em);
        }
        
        button.btn-secondary:active::before {
            box-shadow: 0 0 0 2px #37474f, 0 0 #607d8b;
            transform: translate3d(0, 0, -1em);
        }
        
        button.btn-destructive {
            font-weight: 600;
            color: #ffffff;
            text-transform: uppercase;
            padding: 1.25em 0;
            background: #d32f2f;  /* Strong red */
            border: 2px solid #b71c1c;  /* Darker red border */
            border-radius: 0.75em;
            transform-style: preserve-3d;
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
        }
        
        button.btn-destructive::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #e53935;  /* Slightly lighter red */
            border-radius: inherit;
            box-shadow: 0 0 0 2px #b71c1c, 0 0.125em 0 0 #ef5350;  /* Shadow colors */
            transform: translate3d(0, 0.75em, -1em);
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
        }
        
        button.btn-destructive:hover {
            background: #e53935;  /* Lighter red on hover */
            transform: translate(0, 0.25em);
        }
        
        button.btn-destructive:hover::before {
            box-shadow: 0 0 0 2px #b71c1c, 0 0.125em 0 0 #ef5350;
            transform: translate3d(0, 0.5em, -1em);
        }
        
        button.btn-destructive:active {
            background: #e53935;
            transform: translate(0em, 0.75em);
        }
        
        button.btn-destructive:active::before {
            box-shadow: 0 0 0 2px #b71c1c, 0 0 #ef5350;
            transform: translate3d(0, 0, -1em);
        } 
        `
}