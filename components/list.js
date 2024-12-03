import { html } from "../libs/hybrids.js";
import { StorageDB } from "../storagedb.js";

const storage = new StorageDB()
export let selected = new Set()

function handleClick(host,el){
  //TODO: lookup the item using id and then operate on it
  return false
}

function handleCheck(host,el){
  if(el.currentTarget.checked){
    selected.add(el.currentTarget.id)
  }else{
    selected.delete(el.currentTarget.id)
  }
  return false
}

export const ItemList = {
    tag: 'item-list',
    id: {
      value: "list-of-items",
      observe(host, value, lastValue) {
          if (!!value) {
            storage.getAll().then(items=>{
              host.items = Object.values(items)
            })
          }
      },
    },
    items: {value: [
    ]},
    render: ({id,items}) => html`
      <div class="list" id="${id}">
        ${items.map((item) => html` 
          <div class="snippet-card">
            <h-stack gap="2px">
                <h-spacer width="4px"></h-spacer>
                <v-stack gap="4px">
                  <h2 style="margin-bottom: 2px;" id="heading-${item.id}" onclick="${handleClick}">${item.question}</h2>
                  <p style="font-family:monospace;margin-top:2px;" id="card-${item.id}" onclick="${handleClick}">${item.answer||""}<br>[${item.text.slice(0,120)}...]</p>
                </v-stack>
                <h-spacer width="4px"></h-spacer>
                <input class="styled-checkbox" id="checkbox-${item.id}" type="checkbox" value="value1" onclick="${handleCheck}">
            </h-stack>
          </div>
          `)}
      </div>
    `.css`
    .grey-box{
      width: 100px;
      height: 100px;
      background: gray;
    }
    .list {
      list-style: none;
      margin: 0 0 0 -2px;
      padding: 0;
      z-index: 10;
    }

    .list:first-child{
      margin-top: 10px;
    }

    .list-item {
      padding: 12px;
      border-bottom: 1px solid #ddd;
      cursor: pointer;
    }

    .snippet-card{
      box-shadow: 1px 2px 0px 4px rgba(0,0,0,1);
      border-radius: 10px;
      padding: 8px 12px 12px 12px;
      margin: 16px 6px;
      background-color: white;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .snippet-card:hover {
      box-shadow: 2px 3px 0px 5px rgba(0,0,0,1);
      cursor: pointer;
    } 
    `
};