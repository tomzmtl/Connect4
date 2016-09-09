export default null;


export const highlightCell = (index) => ({
  type: 'HIGHLIGHT_CELL',
  index,
});


export const unhighlightCell = (index) => ({
  type: 'UNHIGHLIGHT_CELL',
  index,
});


export const clickCell = (index) => ({
  type: 'CLICK_CELL',
  index,
});
