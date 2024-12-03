import { define } from "./libs/hybrids.js";
import { ItemList } from "./components/list.js";
import { SidePanel } from "./layout/panel.js";
import { Export } from "./components/export.js";
import {HStack,VStack,HSpacer,VSpacer} from "./layout/stacks.js";
import { SortAscIcon,SortDescIcon,SearchIcon,TrashIcon,ReloadIcon,GoogleDocIcon,GoogleFormIcon,GoogleSlideIcon,MarkdownIcon, KeepIcon } from "./components/icons.js";

import { StorageDB } from "./storagedb.js";
//Define all Layout Components
define(HStack);
define(VStack);
define(HSpacer);
define(VSpacer);
define(SidePanel);

//Define all UI Components
define(ItemList);
define(Export);

//define icons
define(SortAscIcon);
define(SortDescIcon);
define(SearchIcon);
define(ReloadIcon);
define(TrashIcon);
define(GoogleDocIcon);
define(GoogleSlideIcon);
define(GoogleFormIcon);
define(MarkdownIcon);
define(KeepIcon);

//Add listeners
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.action === "done-search"){
        const storage = new StorageDB()
        storage.getAll().then(items=>{
            const sidePanel = document.querySelector('side-panel')
            if(!sidePanel){return}
            const itemList = sidePanel.shadowRoot.querySelector('item-list')
            if(!itemList){return}
            itemList.items = Object.values(items)
        })
    }

})