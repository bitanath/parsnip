import { html } from "../libs/hybrids.js";

function clickedElement(){

}

export const Topbar = {
    tag: "top-bar",
    render: () => html`
        <div class="toolbar">
            <h-stack gap="2px">
                <button title="Sort Alphabetically" class="btn-secondary" onclick="${clickedElement}"><sort-ascending/></button>
                <h-spacer width="4px"></h-spacer>
                <search-bar></search-bar>
                <h-spacer width="10px"></h-spacer>
                <button title="Semantically Search Snippets" class="btn-primary" onclick="${clickedElement}"><search-icon/></button>
                <h-spacer width="4px"></h-spacer>
                <button title="Refresh Summaries" class="btn-doc" onclick="${clickedElement}"><reload-icon/></button>
            </h-stack>
        </div>
    `.css`
    .toolbar {
        position: fixed;
        top: 6px;
        left: 0;
        z-index: 100;
        width: 336px;
        height: auto;
        box-shadow: 1px 2px 0px 4px rgba(0,0,0,1);
        border-radius: 10px;
        padding: 8px 4px 12px 4px;
        margin: 12px 6px;
        background-color: yellow;
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
    
    button.btn-primary {
        font-weight: 600;
        color: #ffffff;
        text-transform: uppercase;
        padding: 1.25em 0;
        background: #1a237e;  /* Deep blue */
        border: 2px solid #0d1757;  /* Darker blue border */
        border-radius: 0.75em;
        transform-style: preserve-3d;
        transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
    } 
  
    button.btn-primary::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #283593;  /* Slightly lighter blue */
        border-radius: inherit;
        box-shadow: 0 0 0 2px #0d1757, 0 0.125em 0 0 #3949ab;  /* Darker blue shadow */
        transform: translate3d(0, 0.75em, -1em);
        transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }
  
    button.btn-primary:hover {
        background: #283593;  /* Slightly lighter blue on hover */
        transform: translate(0, 0.25em);
    }
  
    button.btn-primary:hover::before {
        box-shadow: 0 0 0 2px #0d1757, 0 0.125em 0 0 #3949ab;
        transform: translate3d(0, 0.5em, -1em);
    }
  
    button.btn-primary:active {
        background: #283593;
        transform: translate(0em, 0.75em);
    }
  
    button.btn-primary:active::before {
        box-shadow: 0 0 0 2px #0d1757, 0 0 #3949ab;
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
    
    `,
};
