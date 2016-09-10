
export default (game, action) => {
  switch (action.type) {

    case 'CLICK_CELL':
      return {
        player: game.player === 1 ? 2 : 1,
      };

    default: return game;
  }
};
