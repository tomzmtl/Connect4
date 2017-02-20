export default null;


export const saveGame = (state) => {
  localStorage.setItem('game.save', JSON.stringify(state));
};
