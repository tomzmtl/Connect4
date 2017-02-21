import Grid from '../tiled/Grid';
import Point from '../tiled/Point';


export default null;


export const getWinningCells = (grid, player) => {
  // check for horizontal line
  for (let y = grid.height; y >= 1; y -= 1) {
    for (let x = 1; x <= (grid.width - 4) + 1; x += 1) {
      const subgrid = Grid.slice(grid, Point.create(x, y), 4, 1);
      if (Grid.matchPredicate(subgrid, c => c.owner === player)) {
        return subgrid.cells;
      }
    }
  }
  // check for vertical line
  for (let y = (grid.height - 4) + 1; y >= 1; y -= 1) {
    for (let x = 1; x <= grid.width; x += 1) {
      const subgrid = Grid.slice(grid, Point.create(x, y), 1, 4);
      if (Grid.matchPredicate(subgrid, c => c.owner === player)) {
        return subgrid.cells;
      }
    }
  }

  // check for diagonal line
  const predicate = c => c.owner === player;
  for (let y = (grid.height - 4) + 1; y >= 1; y -= 1) {
    for (let x = 1; x <= (grid.width - 4) + 1; x += 1) {
      const subgrid = Grid.slice(grid, Point.create(x, y), 4, 4);

      // check SE
      let hits = 0;
      let cells = [];
      for (let i = 1; i < 5; i += 1) {
        const cell = Grid.slice(subgrid, Point.create(i, i), 1, 1);
        if (Grid.matchPredicate(cell, predicate)) {
          cells.push(cell.cells[0]);
          hits += 1;
        }
      }

      if (hits === 4) {
        return cells;
      }

      // check NE
      hits = 0;
      cells = [];
      for (let i = 1; i < 5; i += 1) {
        const cell = Grid.slice(subgrid, Point.create(i, 5 - i), 1, 1);
        if (Grid.matchPredicate(cell, predicate)) {
          cells.push(cell.cells[0]);
          hits += 1;
        }
      }

      if (hits === 4) {
        return cells;
      }
    }
  }
  return null;
};
