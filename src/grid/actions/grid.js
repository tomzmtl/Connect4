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


export const nextTurn = () => ({
  type: 'NEXT_TURN',
});


export const placeTile = index => (dispatch, getState) => {
  const { game, grid } = getState();
  if (game.locked || grid.cells[index].owner) {
    return;
  }

  dispatch({
    type: 'PLACE_TILE',
    index,
  });

  window.setTimeout(() => {
    if (!getState().game.winner) {
      dispatch(nextTurn());
    }
  }, 500);
};
