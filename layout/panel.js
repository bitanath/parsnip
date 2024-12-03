import { html } from "../libs/hybrids.js";

export const SidePanel = {
    tag: 'side-panel',
    detail: false,
    snippet: "0",
    render: ({detail,snippet}) => html`
      <export-bar></export-bar><item-list></item-list>
    `.css`
    :host {
      display: block;
      height: 100%;
      padding: 2px 2px;
      overflow-y: scroll;
    }
    `
};