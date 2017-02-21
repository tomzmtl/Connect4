import grid from './grid';
import { getWinningCells } from '../helpers/game.js';


export default (state, action) => {
  const { game } = state;
  switch (action.type) {

    case 'PLACE_TILE':
      return {
        ...game,
        locked: true,
      };

    case 'NEXT_TURN': {
      const newState = {
        ...game,
        locked: false,
        player: game.player === 1 ? 2 : 1,
        turn: game.turn + 1,
      };

      const newGrid = grid(state, action);

      const winningCells = getWinningCells(newGrid, game.player);

      if (winningCells) {
        return {
          ...game,
          winningCells,
          winner: game.player,
        };
      }

      if (!winningCells && game.turn === 42) {
        return {
          ...game,
          draw: true,
        };
      }

      return newState;
    }

    default: return state.game;
  }
};
