import { randomInt, maxInArray } from './number';


export default ({ game }) => {
  if ([1, 2].includes(game.turn)) {
    return 3;
  }

  if ([2, 3].includes(game.turn)) {
    return randomInt(0, 1);
  }

  if ([4, 5].includes(game.turn)) {
    return randomInt(5, 6);
  }

  const scores = game.scores[game.player - 1].map((s, i) => ({ index: i + 1, score: s }));

  // prepare an array of x-index that have the best next moves
  const bestIndexes = scores.reduce((indexes, { score, index }) => {
    if (score === -1) {
      return indexes;
    }

    const max = maxInArray(scores.map(i => i.score));

    if (score < max) {
      return indexes;
    }

    return indexes.concat(index);
  }, []);

  const choice = randomInt(0, bestIndexes.length - 1);

  return bestIndexes[choice] - 1;
};
