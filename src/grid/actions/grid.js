import { end, wait } from '../../core/actions/turn';


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


export const placeTile = x => (dispatch) => {
  dispatch({
    type: 'PLACE_TILE',
    x,
  });

  dispatch(end());
  dispatch(wait());
};
