# ✂ Parsnip - Chrome Extension
A complex chrome extension that allows semantic search across tabs, including across **PDFs**, **Google Docs** and **Google Slides**

✨ Developed for the Google Chrome Built-in AI Challenge c.2024 

### Quick Note before Installation
The working of this extension depends on the AI Gemini Nano Model being downloaded through trial_tokens for this extension with key `trial_tokens` in `manifest.json`. 
- In case the extension ID changes, this trial token will expire, and a new one needs to be generated from [here](https://developer.chrome.com/origintrials/#/trials/active)
- In case the version of Chrome does not support local Gemini Nano, the extension will NOT work
- This Extension was only tested on Version 133.0.6847.2 (Official Build) dev (arm64) and MacOS Sequioa

### Project Structure

```
├──  components -> UI Components using Shadow DOM for custom elements
│  ├──  export.js
│  ├──  icons.js
│  ├──  list.js
│  ├──  search.js
│  └──  topbar.js
├──  content -> Content Script to Inject Search Page
│  ├──  search.css
│  └──  search.js
├──  export -> JS Scripts to export data to Google Docs or Drive
│  ├──  documents.js
│  ├──  markdown.js
│  └──  presentations.js
├──  fonts -> Custom Fonts to make things look nice
│  ├── Bokor.woff2
│  ├── Branda.ttf
│  ├── Darker.woff2
│  └── DarkerGrotesque.ttf
├──  icons -> Icons for the Extension
│  ├── empty_state.png
│  ├── gemini.svg
│  ├── icon-16.png
│  ├── icon-32.png
│  ├── icon-64.png
│  ├── icon-128.png
│  ├── icon-512.png
│  ├── icon-1024.png
│  ├── meteor.png
│  ├── parsnip.svg
│  ├── rocket.png
│  ├── simplified_logo.svg
│  └── svgviewer-output.svg
├──  import -> JS Scripts to read websites and scrape text
│  ├──  documents.js
│  ├──  github.js
│  ├──  pedfile.js
│  └──  presentations.js
├──  layout -> Layout custom HTML elements and Shadow DOM
│  ├──  panel.js
│  └──  stacks.js
├──  libs -> Modified local copy for Sentence Vectorization and Readability parser for webpages
│  ├──  sentence-parser
│  ├──  hybrids.js
│  ├──  pdfjs.min.js
│  ├──  pdfjs.worker.js
│  ├──  readability.max.js
├──  LICENSE
├──  manifest.json -> Change Extension Trial Key here
├──  README.md
├──  settings.html
├──  sidepanel.html
├──  sidepanel.js
├──  storagedb.js
├──  vectordb.js
├──  worker.js
└──  workutils.js
```

### Installation 
Install as you would any Chrome Extension in Developer Mode. Simply Load Unpacked from folder after enabling Developer Mode in `chrome://extensions`

### Usage
Once installed, simply press `Shift+Alt+F` or `Shift+Option+F` in order to open up the search UI on any page. Tabs are indexed and vectorized in the background while you browse. 

The extension also includes a side panel that can be used to browse your query history and export related documents to Google Docs as a document, Google Slides as a presentation or Google Drive as a Markdown doc.