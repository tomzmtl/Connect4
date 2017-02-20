import omit from 'lodash.omit';


export default null;


export const saveGame = (state) => {
  localStorage.setItem('game.save', JSON.stringify(omit(state, ['ui'])));
};
