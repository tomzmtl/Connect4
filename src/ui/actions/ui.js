export default null;


export const toggleMainMenu = () => ({
  type: 'TOGGLE_MAIN_MENU',
});


export const togglePlayersScreen = () => ({
  type: 'TOGGLE_PLAYERS_SCREEN',
});


export const updatePlayerName = (index, name) => ({
  type: 'UPDATE_PLAYER_NAME',
  index,
  name,
});
