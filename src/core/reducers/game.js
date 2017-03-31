import grid from './grid';
import { randomInt } from '../../core/helpers/number';
import getWinningCells from '../helpers/getWinningCells';
import calculateTilesScore from '../helpers/calculateTilesScore';


export default (state, action) => {
  const { game } = state;
  switch (action.type) {

    case 'PLACE_TILE': {
      const newGrid = grid(state, action);

      const s1 = calculateTilesScore(newGrid, 1);
      const s2 = calculateTilesScore(newGrid, 2);

      return {
        ...game,
        locked: true,
        scores: [s1, s2],
      };
    }

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
