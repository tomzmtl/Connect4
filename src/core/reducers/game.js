
export default (game, action) => {
  switch (action.type) {

    case 'PLACE_TILE':
      return {
        player: game.player === 1 ? 2 : 1,
        turn: game.turn + 1,
      };

    default: return game;
  }
};
