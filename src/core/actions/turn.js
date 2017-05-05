import calculateCpuNextMove from '../helpers/calculateCpuNextMove';
import { placeTile } from '../../grid/actions/grid';


export default null;

export const wait = () => (dispatch) => {
  window.setTimeout(() => dispatch({ type: 'TURN.WAIT' }), 100);
};

export const end = () => ({
  type: 'TURN.END',
});

export const cpuTurn = () => (dispatch, getState) => {
  const x = calculateCpuNextMove(getState());

  dispatch(placeTile(x));
};
