
export default (state, action) => {
  switch (action.type) {

    case 'PLACE_TILE':
      if (state.tiles[action.index].owner) {
        return state.game;
      }
      return {
        player: state.game.player === 1 ? 2 : 1,
        turn: state.game.turn + 1,
      };

    default: return state.game;
  }
};
