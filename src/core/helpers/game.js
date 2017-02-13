import Grid from '../tiled/Grid';
import Point from '../tiled/Point';


export default null;


export const hasWinner = (grid, player) => {
  // check for horizontal line
  for (let y = grid.height; y >= 1; y -= 1) {
    for (let x = 1; x <= (grid.width - 4) + 1; x += 1) {
      const subgrid = Grid.slice(grid, Point.create(x, y), 4, 1);
      if (Grid.matchPredicate(subgrid, c => c.owner === player)) {
        return true;
      }
    }
  }
  // check for vertical line
  for (let y = (grid.height - 4) + 1; y >= 1; y -= 1) {
    for (let x = 1; x <= grid.width; x += 1) {
      const subgrid = Grid.slice(grid, Point.create(x, y), 1, 4);
      if (Grid.matchPredicate(subgrid, c => c.owner === player)) {
        return true;
      }
    }
  }

  // check for diagonal line
  for (let y = (grid.height - 4) + 1; y >= 1; y -= 1) {
    for (let x = 1; x <= (grid.width - 4) + 1; x += 1) {
      const subgrid = Grid.slice(grid, Point.create(x, y), 4, 4);

      // check SE
      let hits = 0;
      for (let i = 1; i < 5; i += 1) {
        const cell = Grid.slice(subgrid, Point.create(i, i), 1, 1);
        if (Grid.matchPredicate(cell, c => c.owner === player)) {
          hits += 1;
        }
      }
      if (hits === 4) {
        return true;
      }

      // check NE
      hits = 0;
      if (Grid.matchPredicate(Grid.slice(subgrid, Point.create(1, 4), 1, 1), c => c.owner === player)) {
        hits += 1;
      }
      if (Grid.matchPredicate(Grid.slice(subgrid, Point.create(2, 3), 1, 1), c => c.owner === player)) {
        hits += 1;
      }
      if (Grid.matchPredicate(Grid.slice(subgrid, Point.create(3, 2), 1, 1), c => c.owner === player)) {
        hits += 1;
      }
      if (Grid.matchPredicate(Grid.slice(subgrid, Point.create(4, 1), 1, 1), c => c.owner === player)) {
        hits += 1;
      }
      if (hits === 4) {
        return true;
      }
    }
  }
  return false;
};
