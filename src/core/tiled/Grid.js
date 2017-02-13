import times from 'lodash.times';
import Point from './Point';
import { coordsToIndex, indexToCoords } from './helpers';


const create = (width, height, cells = []) => {
  const size = width * height;
  return {
    width,
    height,
    size,
    cells: cells.length ? cells : times(size, index => index),
  };
};


const slice = (grid, point, width = 1, height = 1) => {
  let points = [
    point,
    Point.create(point.x + width - 1, point.y + height - 1),
  ];

  if (points[0].y > points[1].y || (points[0].y === points[1].y && points[0].x > points[1].x)) {
    points.reverse();
  }

  points = points.map(point => Point.applyTo(point, grid));

  const point1 = points[0];
  const point2 = points[1];

  const cells = [];
  for (let y = point1.y; y <= point2.y; y += 1) {
    for (let x = point1.x; x <= point2.x; x += 1) {
      cells.push(grid.cells[coordsToIndex(grid.width, x, y)]);
    }
  }

  return create(point2.x - point1.x + 1, point2.y - point1.y + 1, cells);
};


const sliceCol = (grid, x) => slice(grid, Point.create(x, 1), 1, grid.height);


const sliceRow = (grid, y) => slice(grid, Point.create(1, y), grid.width, 1);


const match = (grid1, grid2) => {
  if (grid1.width !== grid2.width || grid1.height !== grid2.height) {
    return false;
  }

  for (let i = 0; i < grid1.cells.length; i += 1) {
    if (grid1.cells[i] !== grid2.cells[i]) {
      return false;
    }
  }

  return true;
};


const matchPredicate = (grid, fn) => {
  for (let i = 0; i < grid.cells.length; i += 1) {
    if (!fn(grid.cells[i])) {
      return false;
    }
  }

  return true;
};


const indexOf = (haystack, needle) => {
  for (let y = 1; y <= haystack.height - (needle.height + 1); y += 1) {
    for (let x = 1; x <= haystack.width - (needle.width + 1); x += 1) {
      const point = Point.create(x, y);
      const subgrid = slice(haystack, point, needle.width, needle.height);
      if (match(subgrid, needle)) {
        return point;
      }
    }
  }
  return null;
};


const includes = (haystack, needle) => indexOf(haystack, needle) !== null;


export default {
  create,
  includes,
  indexOf,
  match,
  matchPredicate,
  slice,
  sliceCol,
  sliceRow,
};
