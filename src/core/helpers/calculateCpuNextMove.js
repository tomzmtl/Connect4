import times from 'lodash.times';
import Grid from '../tiled/Grid';
import { randomInt, maxInArray } from './number';


export default ({ grid }) => {
  const scores = times(7, i => ({ index: i, score: 0 }));
  for (let x = 0; x < 7; x += 1) {
    const col = Grid.sliceCol(grid, x + 1);

    if (Grid.matchPredicate(col, c => !!c.owner)) {
      scores[x].score = -1;
    }
  }

  const bestIndexes = scores.reduce((indexes, { score, index }) => {
    if (score === -1) {
      return indexes;
    }

    const max = maxInArray(indexes.map(i => i.score));

    if (score < max) {
      return indexes;
    }

    return indexes.concat(index);
  }, []);

  console.log(bestIndexes);

  return bestIndexes[randomInt(0, bestIndexes.length - 1)];
};
