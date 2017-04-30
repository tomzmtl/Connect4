import { randomInt, maxInArray } from './number';


export default ({ game }) => {
  if ([1, 2].includes(game.turn)) {
    return 3;
  }

  if ([2, 3].includes(game.turn)) {
    return randomInt(0, 6);
  }

  const playerScores = game.scores[game.player - 1].map((s, i) => ({ index: i + 1, score: s }));
  const opponent = game.player === 1 ? 2 : 1;
  const opponentScores = game.scores[opponent - 1].map((s, i) => ({ index: i + 1, score: s }));

  // prevent opponent from winning, if applicable
  for (let i = 0; i < playerScores.length; i += 1) {
    if (opponentScores[i].score === 3) {
      return i;
    }
  }

  // prepare an array of x-index that have the best next moves
  const bestIndexes = playerScores.reduce((indexes, { score, index }) => {
    if (score === -1) {
      return indexes;
    }

    const max = maxInArray(playerScores.map(i => i.score));

    if (score < max) {
      return indexes;
    }

    return indexes.concat(index);
  }, []);

  const choice = randomInt(0, bestIndexes.length - 1);

  return bestIndexes[choice] - 1;
};
