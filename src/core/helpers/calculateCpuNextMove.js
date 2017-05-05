import sample from 'lodash.sample';
import Grid from '../tiled/Grid';
import { randomInt, maxInArray } from './number';


export default ({ game, grid }) => {
  if (game.turn === 1) {
    return 3;
  }

  if (game.turn === 2) {
    if (grid.cells.find(c => c.index === 38).owner !== null) {
      return sample([2, 4]);
    }
    return 3;
  }

  if ([2, 3].includes(game.turn)) {
    return randomInt(0, 6);
  }

  const avails = game.scores[0].map((s, x) =>
    Grid.sliceCol(grid, x + 1).cells.some(c => c.owner === null));

  const reduceScores = (scores, score, i) =>
    (avails ? scores.concat({ index: i + 1, score }) : scores);

  const opponent = game.player === 1 ? 2 : 1;
  const scores = {
    player: game.scores[game.player - 1].reduce(reduceScores, []),
    opponent: game.scores[opponent - 1].reduce(reduceScores, []),
  };

  // prevent opponent from winning, if applicable
  for (let i = 0; i < scores.player.length; i += 1) {
    if (scores.opponent[i].score === 3) {
      return i;
    }
  }

  const flatPlayerScores = scores.player.map(i => i.score);
  const flatOpponentScores = scores.opponent.map(i => i.score);

  // prepare an array of x-index that have the best next moves
  const playerMax = maxInArray(flatPlayerScores);
  const opponentMax = maxInArray(flatOpponentScores);

  const reduceIndexes = max => (indexes, { score, index }) => {
    if (score === -1) {
      return indexes;
    }

    if (score < max) {
      return indexes;
    }

    return indexes.concat(index);
  };

  const bestPlayerIndexes = scores.player.reduce(reduceIndexes(playerMax), []);
  const bestOpponentIndexes = scores.opponent.reduce(reduceIndexes(opponentMax), []);

  const indexes = opponentMax > playerMax ? bestOpponentIndexes : bestPlayerIndexes;

  if (indexes.length === 7 && avails.includes(false)) {
    return sample(indexes.filter((idx, i) => !!avails[i])) - 1;
  }

  return sample(indexes) - 1;
};
