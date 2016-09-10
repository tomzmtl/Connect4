export default null;


export const highlightColumn = (x) => ({
  type: 'HIGHLIGHT_COLUMN',
  x,
});


export const unhighlightColumn = (x) => ({
  type: 'UNHIGHLIGHT_COLUMN',
  x,
});


export const placeTile = (index) => ({
  type: 'PLACE_TILE',
  index,
});
