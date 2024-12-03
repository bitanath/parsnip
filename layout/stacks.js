import { html, define } from '../libs/hybrids.js';

export const HStack = {
  gap: '0', // Default gap
  tag: 'h-stack',
  align: 'flex-start', // Default vertical alignment
  justify: 'flex-start',
  render: ({ gap, align,justify }) => html`
    <div style="display: flex; gap: ${gap}; align-items: ${align}; justify-content: ${justify};">
      <slot></slot>
    </div>
  `,
};

export const VStack = {
  gap: '0', // Default gap
  tag: 'v-stack',
  align: 'flex-start', // Default horizontal alignment
  render: ({ gap, align }) => html`
    <div style="display: flex; flex-direction: column; gap: ${gap}; align-items: ${align};">
      <slot></slot>
    </div>
  `,
};

export const HSpacer = {
  width: '', // Optional custom width
  tag: 'h-spacer',
  render: ({ width }) => html`
    <div style="
      flex-grow: 1;
      width: ${width !== '' ? width : 'auto'};
      min-width: ${width !== '' ? width : null};
      height: 100%;
    }"></div>
  `,
};

export const VSpacer = {
  height: '', // Optional custom height
  tag: 'v-spacer',
  render: ({ height }) => html`
    <div style="
      flex-grow: 1;
      height: ${height !== '' ? height : 'auto'};
      min-height: ${height !== '' ? height : null};
      width: 100%;
    "></div>
  `,
};