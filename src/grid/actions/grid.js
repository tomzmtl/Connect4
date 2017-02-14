export default null;


export const highlightCell = (x, y) => ({
  type: 'HIGHLIGHT_CELL',
  x,
  y,
});


export const unhighlightCell = (x, y) => ({
  type: 'UNHIGHLIGHT_CELL',
  x,
  y,
});


export const placeTile = index => ({
  type: 'PLACE_TILE',
  index,
});
