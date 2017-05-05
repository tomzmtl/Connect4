import { wait } from './turn';


export default null;

export const resetGame = () => (dispatch) => {
  dispatch({
    type: 'RESET_GAME',
  });

  dispatch(wait());
};

export const initializeApp = () => (dispatch) => {
  dispatch(wait());
};
