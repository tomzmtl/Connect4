import calculateCpuNextMove from './calculateCpuNextMove';


export default null;


export const cpuTurn = (dispatch, getState) => {
  const index = calculateCpuNextMove(getState());

  window.setTimeout(() => {
    dispatch({
      type: 'PLACE_TILE',
      index,
    });

    window.setTimeout(() => {
      if (!getState().game.winner) {
        dispatch({
          type: 'NEXT_TURN',
        });
      }
    }, 500);
  }, 500);
};
