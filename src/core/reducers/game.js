import grid from './grid';
import { hasWinner } from '../helpers/game.js';


export default (state, action) => {
  switch (action.type) {

    case 'PLACE_TILE': {
      if (state.grid.cells[action.index].owner || state.game.winner) {
        return state.game;
      }

      const newState = {
        ...state.game,
        player: state.game.player === 1 ? 2 : 1,
        turn: state.game.turn + 1,
      };

      const newGrid = grid(state, action);

      const winner = hasWinner(newGrid, state.game.player);

      console.log(winner);

      if (winner) {
        return {
          ...state.game,
          winner: state.game.player,
        };
      }

      return newState;
    }

    default: return state.game;
  }
};
