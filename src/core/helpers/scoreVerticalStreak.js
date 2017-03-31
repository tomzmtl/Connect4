import Grid from '../../core/tiled/Grid';
import Point from '../../core/tiled/Point';
import { shallowEqual, arraySum } from '../../core/helpers/array';


export default (scores, grid, player) => {
  const p = player;

  const vScores = scores.map(() => 0);

  for (let y = 1; y < 4; y += 1) {
    for (let x = 1; x <= 7; x += 1) {
      const slice = Grid.slice(grid, Point.create(x, y), 1, 4);
      const pattern = slice.cells.map(c => c.owner);

      // 3/4

      if (vScores[x - 1] < 100) {
        if (shallowEqual(pattern, [null, p, p, p])) {
          vScores[x - 1] = 100;
        }
      }

      // 2/4

      if (vScores[x - 1] < 50) {
        if (shallowEqual(pattern, [null, null, p, p])) {
          vScores[x - 1] = 50;
        }
      }

      // 1/4

      if (vScores[x - 1] < 25) {
        if (shallowEqual(pattern, [null, null, null, p])) {
          vScores[x - 1] = 25;
        }
      }
    }
  }

  return arraySum(scores, vScores);
};
