import { cpuTurn } from '../helpers/game';


export default null;


export const resetGame = () => (dispatch, getState) => {
  dispatch({
    type: 'RESET_GAME',
  });

  const { game } = getState();

  if (game.player === 2) {
    cpuTurn(dispatch, getState);
  }
};


export const initializeApp = () => (dispatch, getState) => {
  const { game } = getState();

  if (game.player === 2) {
    cpuTurn(dispatch, getState);
  }
};
