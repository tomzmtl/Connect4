import Grid from '../../core/tiled/Grid';
import Point from '../../core/tiled/Point';
import { lowestOwnedCell } from '../../grid/helpers/grid';
import { shallowEqual } from '../../core/helpers/array';


const colScore = (grid, scores, x, y, score) => {
  if (x < 1 || x > 7) {
    return scores;
  }

  const lowest = lowestOwnedCell(grid, x);

  if (y < 6) {
    const cellBelow = grid.cells.find(c => c.x === lowest.x && c.y === lowest.y + 1);
    if (!cellBelow) {
      return scores;
    }

    if (cellBelow.owner === null) {
      return scores;
    }
  }

  const newScores = [
    ...scores,
  ];

  newScores[x - 1] = score;
  return newScores;
};


export default (scores, grid, player) => {
  let s = Array.from(scores);
  const p = player;

  for (let y = 6; y > 0; y -= 1) {
    for (let x = 1; x <= 7; x += 1) {
      const slice = Grid.slice(grid, Point.create(x, y), 4, 1);
      const pattern = slice.cells.map(c => c.owner);

      // 3/4

      if (s[x - 1] < 100) {
        if (shallowEqual(pattern, [null, p, p, p])) {
          s = colScore(grid, s, x, y, 100);
        }

        if (shallowEqual(pattern, [p, null, p, p])) {
          s = colScore(grid, s, x + 1, y, 100);
        }

        if (shallowEqual(pattern, [p, p, null, p])) {
          s = colScore(grid, s, x + 2, y, 100);
        }

        if (shallowEqual(pattern, [p, p, p, null])) {
          s = colScore(grid, s, x + 3, y, 100);
        }
      }

      // 2/4

      if (s[x - 1] < 50) {
        if (shallowEqual(pattern, [null, null, p, p])) {
          s = colScore(grid, s, x, y, 50);
          s = colScore(grid, s, x + 1, y, 50);
        }

        if (shallowEqual(pattern, [p, null, null, p])) {
          s = colScore(grid, s, x + 1, y, 50);
          s = colScore(grid, s, x + 2, y, 50);
        }

        if (shallowEqual(pattern, [p, p, null, null])) {
          s = colScore(grid, s, x + 2, y, 50);
          s = colScore(grid, s, x + 3, y, 50);
        }

        if (shallowEqual(pattern, [p, null, p, null])) {
          s = colScore(grid, s, x + 1, y, 50);
          s = colScore(grid, s, x + 3, y, 50);
        }

        if (shallowEqual(pattern, [null, p, null, p])) {
          s = colScore(grid, s, x, y, 50);
          s = colScore(grid, s, x + 2, y, 50);
        }
      }

      // 1/4

      if (s[x - 1] < 25) {
        if (shallowEqual(pattern, [null, null, null, p])) {
          s = colScore(grid, s, x, y, 25);
          s = colScore(grid, s, x + 1, y, 25);
          s = colScore(grid, s, x + 2, y, 25);
        }

        if (shallowEqual(pattern, [null, null, p, null])) {
          s = colScore(grid, s, x, y, 25);
          s = colScore(grid, s, x + 1, y, 25);
          s = colScore(grid, s, x + 3, y, 25);
        }

        if (shallowEqual(pattern, [null, p, null, null])) {
          s = colScore(grid, s, x, y, 25);
          s = colScore(grid, s, x + 2, y, 25);
          s = colScore(grid, s, x + 3, y, 25);
        }

        if (shallowEqual(pattern, [p, null, null, null])) {
          s = colScore(grid, s, x + 1, y, 25);
          s = colScore(grid, s, x + 2, y, 25);
          s = colScore(grid, s, x + 3, y, 25);
        }
      }
    }
  }

  return s;
};
