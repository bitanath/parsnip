import { html } from "../libs/hybrids.js";

function searchTyping(){

}

export const SearchBar = {
    tag: "search-bar",
    placeholder: "Search...",
    value: "",
    render: ({ value, placeholder }) => html`
        <div class="search-container">
            <input type="text" class="search-bar" value="${value}" onchange="${searchTyping}" placeholder="${placeholder}" />
            <svg
                class="search-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </div>
    `.css`.search-container {
        position: relative;
        width: calc(128px + 36px + 12px); /* Width plus padding */
        height: 45px;
    }
    
    .search-bar {
        width: 128px;
        padding: 12px 12px 12px 36px;
        border: 3px solid #000000;
        border-radius: 12px;
        font-size: 14px;
        outline: none;
        box-shadow: 2px 2px 0px #000000;
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .search-bar:hover {
      box-shadow: 4px 4px 0px #000000;
    } 

    .search-bar:focus {
      box-shadow: 4px 4px 0px #000000;
    }

    .search-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #000000;
        pointer-events: none;
    }`,
};
