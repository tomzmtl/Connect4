export default null;


export const highlightTile = (index) => ({
  type: 'HIGHLIGHT_TILE',
  index,
});


export const unhighlightTile = (index) => ({
  type: 'UNHIGHLIGHT_TILE',
  index,
});


export const placeTile = (index) => ({
  type: 'PLACE_TILE',
  index,
});
