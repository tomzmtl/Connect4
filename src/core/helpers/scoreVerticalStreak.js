import Grid from '../../core/tiled/Grid';
import Point from '../../core/tiled/Point';
import { shallowEqual } from '../../core/helpers/array';


export default (scores, grid, player) => {
  const p = player;

  const newScores = [
    ...scores,
  ];

  for (let y = 1; y < 4; y += 1) {
    for (let x = 1; x <= 7; x += 1) {
      const slice = Grid.slice(grid, Point.create(x, y), 1, 4);
      const pattern = slice.cells.map(c => c.owner);

      // 3/4

      if (newScores[x - 1] < 3) {
        if (shallowEqual(pattern, [null, p, p, p])) {
          newScores[x - 1] = 3;
        }
      }

      // 2/4

      if (newScores[x - 1] < 2) {
        if (shallowEqual(pattern, [null, null, p, p])) {
          newScores[x - 1] = 2;
        }
      }

      // 1/4

      if (newScores[x - 1] < 1) {
        if (shallowEqual(pattern, [null, null, null, p])) {
          newScores[x - 1] = 1;
        }
      }
    }
  }

  return newScores;
};
