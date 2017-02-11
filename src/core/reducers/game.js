import { hasWinner } from '../helpers/game.js';


export default (state, action) => {
  switch (action.type) {

    case 'PLACE_TILE': {
      if (state.grid.cells[action.index].owner) {
        return state.game;
      }

      const winner = hasWinner(state.grid.cells, action.index);

      if (winner) {
        return {
          ...state.game,
          winner,
        };
      }

      return {
        ...state.game,
        player: state.game.player === 1 ? 2 : 1,
        turn: state.game.turn + 1,
      };
    }

    default: return state.game;
  }
};
