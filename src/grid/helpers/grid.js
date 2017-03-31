import Grid from '../../core/tiled/Grid';
import Point from '../../core/tiled/Point';


export default null;


export const indexToCoords = (width, height, index) => [index % width, Math.floor(index / width)];


export const coordsToIndex = (width, x, y) => (y * width) + x;


export const col = (tiles, x) => tiles.filter(tile => tile.x === x);


export const lowestOwnedIndex = (column) => {
  for (const cell of Array.from(column.cells).reverse()) {
    if (cell.owner === null) {
      return cell.index;
    }
  }
  return null;
};


export const lowestOwnedCell = (column) => {
  for (const cell of Array.from(column.cells).reverse()) {
    if (cell.owner === null) {
      return cell;
    }
  }
  return null;
};


export const sliceSquare = (grid, x, y) => {
  let px = x - 1;
  let py = y - 1;
  let w = 3;
  let h = 3;

  if (px <= 0) {
    px = 1;
    w -= 1;
  }

  if (py <= 0) {
    py = 1;
    h -= 1;
  }

  return Grid.slice(grid, Point.create(px, py), w, h);
};
