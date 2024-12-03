let searchBarActive = false;
let originalBody = undefined;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (
		message.action === "keyboardShortcut" &&
		message.command === "single-tab-search"
	) {
		toggleSearchInterface()
	} else if (
		message.action === "keyboardShortcut" &&
		message.command === "multi-tab-search"
	) {
		toggleSearchInterface(false)
	} else if  (
		message.action === "updateSearch" &&
		message.command === "update-search-stream"
	) {
        sendResponse("received stream search")
    }
});

function getBodyComputedStyles() {
    const computedStyle = window.getComputedStyle(document.body);
    return {
        width: computedStyle.width,
        height: computedStyle.height,
        backgroundColor: computedStyle.backgroundColor,
        backgroundImage: computedStyle.backgroundImage,
        backgroundSize: computedStyle.backgroundSize,
        backgroundPosition: computedStyle.backgroundPosition,
        backgroundRepeat: computedStyle.backgroundRepeat,
        backgroundAttachment: computedStyle.backgroundAttachment,
        color: computedStyle.color
    };
}

function toggleSearchInterface(single=true) {
	if (!searchBarActive) {
		const style = document.createElement("style");
        const shadow = single ? "none" : "0px -60px 0px -30px rgba(0,0,0,0.5), 0px -40px 0px -25px rgba(0,0,0,0.9)";
		style.id = "extension-search-styles";
		style.textContent = /* css */ `
        .parsnip-chrome-extension.page-slide-wrapper {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          box-shadow: ${shadow};
          transition: transform 0.6s;
          transition-timing-function: cubic-bezier(0.2,1,0.3,1);
        }

        .parsnip-chrome-extension.gradient-border {
            width: 100%;
            border: 3px solid transparent;
            background-image: linear-gradient(white, white),
                linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red );
            background-clip: padding-box, border-box;
            background-origin: padding-box, border-box;
            background-size: 100% 100%, 400% 100%;
            animation: move-gradient 16s ease-in-out infinite;
        }

        .parsnip-chrome-extension.results-container .box{
            box-shadow: 1px 2px 0px 4px rgba(0,0,0,1);
            border-radius: 10px;
            padding: 8px 12px 8px 12px;
            margin: 16px 6px;
            background-color: white;
        }
          
        @keyframes move-gradient {
            0% {
                background-position: 0 0, 0 0;
            }
            100% {
                background-position: 0 0, 400% 0;
            }
        }

        .parsnip-chrome-extension.page-slide-wrapper.mova{
            transform: perspective(1000px) translate3d(0,36vh,0) rotate3d(1,0,0,30deg);
        }

        .parsnip-chrome-extension.page-slide-wrapper.remova{
            transform: rotate3d(0,0,0,0deg) translate3d(0,-1vh,0);
            box-shadow: none;
        }
        
        .parsnip-chrome-extension.search-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 60px;
            background: #0000;
            z-index: 999999;
            display: flex;
            align-items: center;
            margin-left: -20px;
        }
        
        .parsnip-chrome-extension.search-container .search-input {
            width: 400px;
            max-width: 800px ;
            margin: 0 auto;
            padding: 10px 15px;
            padding-left: 35px;
            font-size: 16px !important;
            outline: none;
            color: black;
            font-family: monospace !important;
            border: 0px;
            border-bottom: 2px solid #000;
            outline: none;
            transition: all 0.3s ease;
            background: #0000;
        }
          
        .parsnip-chrome-extension.search-container .search-input:focus {
            width: 800px;
            border-color: purple;
        }
          
        .parsnip-chrome-extension.search-container .search-input::placeholder {
            color: #000;
        }

        .parsnip-chrome-extension.results-container {
            position: absolute;
            top: 50px;
            left: 0;
            margin: 0 auto;
            width: 100%;
            max-width: 1600px;
            max-height: 32vh;
            padding: 20px;
            font-family: monospace;
            font-size: 12px;
            color: black !important;
        }
        
        .parsnip-chrome-extension.results-container .column-layout {
            display: flex;
            gap: 40px;
            justify-content: center;
            margin: 0 auto;
            max-width: 1200px;
        }
        
        .parsnip-chrome-extension.results-container .column {
            flex: 1;
            max-width: 500px;
        }
        
        .parsnip-chrome-extension.results-container .column p {
            line-height: 1.6;
            margin-bottom: 10px;
            text-align: justify;
            word-spacing:-2px;
            word-break: break-all;
            font-size: 12px !important;
            padding: 14px;
        }

        .parsnip-chrome-extension.results-container .column h3 {
            font-size: 1.35em;
            margin: 0;
        }

        .parsnip-chrome-extension.results-container .column h3::before {
            content: '\u2192';
            display: inline-block;
            padding: 0 0.5em 0 0;
        }  
      `;
		document.head.appendChild(style);

        const searchHint = single ? "this tab" : "all tabs"
		const searchContainer = document.createElement("div");
		searchContainer.className = "search-container";
        searchContainer.classList.add("parsnip-chrome-extension")
		searchContainer.innerHTML = /* html */ `
            <input type="text" class="search-input" placeholder="ENTER to search ${searchHint} or ESC to exit..." autofocus>
        `;
		document.body.appendChild(searchContainer);

        const resultsContainer = document.createElement("div")
        resultsContainer.className = "results-container";
        resultsContainer.classList.add("parsnip-chrome-extension")
		resultsContainer.innerHTML = /* html */ `
            <div class="results-container">
                <div class="column-layout">
                    <div class="column results box">
                        <h3 class="heading">Search By Meaning</h3>
                        <p class="result-section">Search by meaning not by words. If you're searching for a blue planet, searching for "Earth" works just as well as "Planet with life" or "Blue Planet".</p>
                    </div>
                    <div class="column citations box">
                        <h3 class="heading">Find Across Tabs</h3>
                        <p class="citation-section">Search precisely across tabs or in the same tab. Get directed to the exact element in the exact tab with what you looked for. Search through Google Docs, PDFs and Websites.</p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(resultsContainer);

		const wrapper = document.createElement("div");
		wrapper.className = "page-slide-wrapper";
        wrapper.classList.add("parsnip-chrome-extension")

		// Move all body content to wrapper
		while (document.body.firstChild) {
			if (!document.body.firstChild.classList?.contains("search-container")) {
				wrapper.appendChild(document.body.firstChild);
			} else {
				break;
			}
		}
		document.body.appendChild(wrapper);
        const computedStyle = getBodyComputedStyles()
        originalBody = originalBody || computedStyle

		document.body.style.backgroundColor = "antiquewhite";
        document.body.style.backgroundImage = `linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0.2) 2px,
                    transparent 2px
                ),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 2px, transparent 2px),
                linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`;
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "80px 80px, 80px 80px,20px 20px,20px 20px";

        document.body.style.width = "100vw"
        document.body.style.height = "100vh"
		document.addEventListener("keydown", handleEscape);

		const searchInput = document.querySelector(".search-input");
		searchInput.focus();
        searchInput.addEventListener('keydown',handleSearch);

		wrapper.classList.add("mova");
		wrapper.classList.add("gradient-border");

		searchBarActive = true;
        window.handleClick = handleClick
	} else {
		// Remove all added elements and restore page
		const wrapper = document.querySelector(".page-slide-wrapper");
		const searchContainer = document.querySelector(".search-container");
		const resultsContainer = document.querySelector(".results-container");
		const styles = document.getElementById("extension-search-styles");

        const searchInput = document.querySelector(".search-input");
        searchInput.blur();
        wrapper.classList.remove("mova");
        wrapper.classList.remove("gradient-border");
		wrapper.classList.add("remova");

        setTimeout(time=>{searchContainer.remove();resultsContainer.remove();},50)

        document.body.style.backgroundColor = originalBody.backgroundColor
        document.body.style.backgroundImage = originalBody.backgroundImage
        document.body.style.backgroundAttachment = originalBody.backgroundAttachment
        document.body.style.backgroundSize = originalBody.backgroundSize
        document.body.style.width = originalBody.width
        document.body.style.height = originalBody.height

        setTimeout(time=>{
            while (wrapper.firstChild) {
                document.body.appendChild(wrapper.firstChild);
            }
            
            wrapper.remove();
            
            styles.remove();
    
            document.removeEventListener("keydown", handleEscape);
            searchInput.removeEventListener("keydown", handleSearch);
            searchBarActive = false;
            window.handleClick = undefined
        },300)
		
	}
}

function handleClick(e){
    const tabid = e.target.dataset.tabid
    if(!tabid){return}
    chrome.runtime.sendMessage({ action: 'check-open' }, response => {
        let currentTabId = response
        if(currentTabId != tabid){
            chrome.runtime.sendMessage({ action: 'send-open', tabId: tabid }, response => {
                console.log("Switched tab")
            })
        }
    });

    
}

function handleEscape(e) {
	if (e.key === "Escape" && searchBarActive) {
		toggleSearchInterface();
	}
}

function handleSearch(e){
    //TODO: check vector db for search query and return results, send a message to backend
    if (e.key === 'Enter') {
        const sanitizedValue = sanitizeInput(e.target.value.trim());
        chrome.runtime.sendMessage({ action: 'search-things', data: sanitizedValue }, (response) => {
            if (chrome.runtime.lastError) {
                console.error('Error:', chrome.runtime.lastError);
                return;
            }
            try{
                const {answer,related,source} = response
                const resultSection = document.querySelector(".parsnip-chrome-extension.results-container .results .result-section")
                const citationSection = document.querySelector(".parsnip-chrome-extension.results-container .citations .citation-section")
                resultSection.innerHTML = answer + "<br><br>FROM: " + `<a class="from" style="color:blue;cursor:pointer;" data-query="${source.querySelector}" data-tabid="${source.tabid}" >${source.title} [${source.url}]</a>`
                citationSection.innerHTML = `<ol>\n${related.map(r=>`<li>${r.text.slice(0,32)}...[<a class="related" data-query="${r.querySelector}" style="color:blue;cursor:pointer;" data-tabid="${r.tabid}" >${r.title}-${r.url}</a>]</li>\n`).join("")}\n</ol>`
                document.querySelectorAll(".parsnip-chrome-extension.results-container .results .result-section a").forEach(el=>{
                    el.addEventListener("click",handleClick)
                })
                document.querySelectorAll(".parsnip-chrome-extension.results-container .citations .citation-section a").forEach(el=>{
                    el.addEventListener("click",handleClick)
                })
                chrome.runtime.sendMessage({ action: 'done-search'})
            }catch(err){
                console.error(err)
            }finally{
                e.target.value = "";
            }
        });
        e.target.value = 'Generating...';
    }
}

function sanitizeInput(input) {
    if (!input) return '';

    let sanitized = input;

    sanitized = sanitized
        .replace(/<[^>]*>/g, '')           // Remove HTML tags
        .replace(/&[^;]+;/g, '')           // Remove HTML entities
        .replace(/[<>]/g, '');             // Remove < and >

    sanitized = sanitized
        .replace(/javascript:/gi, '')       // Remove javascript: protocol
        .replace(/data:/gi, '')            // Remove data: protocol
        .replace(/vbscript:/gi, '')        // Remove vbscript: protocol
        .replace(/on\w+\s*=/gi, '')        // Remove event handlers
        .replace(/\\\w/g, '');             // Remove escape sequences

    sanitized = sanitized
        .replace(/[\x00-\x1F\x7F-\x9F]/g, '')  // Remove control characters
        .replace(/[\u200B-\u200D\uFEFF]/g, ''); // Remove zero-width characters

    sanitized = sanitized
        .replace(/test123/gi, '')
        .replace(/testing/gi, '')
        .replace(/test test/gi, '')
        .replace(/asdf/gi, '')
        .replace(/qwerty/gi, '')
        .replace(/foo|bar|baz/gi, '')
        .replace(/lorem ipsum/gi, '');

    sanitized = sanitized
        .replace(/\s+/g, ' ')              // Replace multiple spaces with single space
        .replace(/^\s+|\s+$/g, '');        // Trim start and end

    sanitized = sanitized
        .replace(/([.!?]){2,}/g, '$1')     // Replace multiple punctuation with single
        .replace(/[-_]{2,}/g, '-');        // Replace multiple dashes/underscores

    sanitized = sanitized
        .replace(/^\d+$/, '')              // Remove numbers-only strings
        .replace(/\b\d{6,}\b/g, '');       // Remove long number sequences

    return sanitized.trim();
}
