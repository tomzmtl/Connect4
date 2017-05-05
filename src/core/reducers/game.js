import grid from './grid';
import { randomInt } from '../../core/helpers/number';
import getWinningCells from '../helpers/getWinningCells';
import calculateTilesScore from '../helpers/calculateTilesScore';


export default (state, action) => {
  const { game, grid: g } = state;
  switch (action.type) {

    case 'PLACE_TILE':
      return {
        ...game,
        locked: true,
      };

    case 'TURN.WAIT':
      return {
        ...game,
        scores: [1, 2].map(p => calculateTilesScore(g, p)),
      };

    case 'TURN.END': {
      const newState = {
        ...game,
        player: game.player === 1 ? 2 : 1,
        turn: game.turn + 1,
      };

      newState.locked = state.players[newState.player - 1].cpu;

      const newGrid = grid(state, action);

      newState.scores = [1, 2].map(p => calculateTilesScore(newGrid, p));

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
