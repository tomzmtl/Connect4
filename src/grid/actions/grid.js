import { cpuTurn } from '../../core/helpers/game';


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


export const nextTurn = () => (dispatch, getState) => {
  dispatch({
    type: 'NEXT_TURN',
  });

  const { game } = getState();

  if (game.player === 2) {
    cpuTurn(dispatch, getState);
    return;
  }

  window.setTimeout(() => {
    if (!getState().game.winner) {
      dispatch({
        type: 'NEXT_TURN',
      });
    }
  }, 500);
};


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
