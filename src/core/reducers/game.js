import grid from './grid';
import { randomInt } from '../../core/helpers/number';
import getWinningCells from '../helpers/getWinningCells';


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
        player: game.player === 1 ? 2 : 1,
        turn: game.turn + 1,
      };

      if (newState.player === 1) {
        newState.locked = false;
      }

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

    case 'RESET_GAME':
      return {
        ...game,
        player: randomInt(1, 2),
      };

    default: return state.game;
  }
};
