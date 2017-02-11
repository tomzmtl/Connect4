import times from 'lodash.times';
import Point from './Point';
import { coordsToIndex, indexToCoords } from './helpers';


const Grid = {
  width: 0,
  height: 0,
  size: 0,
  cells: [],


  slice(p1, width = 1, height = 1) {
    const points = [
      p1,
      Point.create(p1.x + width - 1, p1.y + height - 1),
    ];

    if (points[0].y > points[1].y || (points[0].y === points[1].y && points[0].x > points[1].x)) {
      points.reverse();
    }

    const point1 = points[0];
    const point2 = points[1];

    [point1, point2].forEach(point => point.applyTo(this));

    const cells = [];
    for (let y = point1.y; y <= point2.y; y += 1) {
      for (let x = point1.x; x <= point2.x; x += 1) {
        cells.push(this.cells[coordsToIndex(this.width, x, y)]);
      }
    }

    return api.create(point2.x - point1.x + 1, point2.y - point1.y + 1, cells);
  },


  sliceCol(x) {
    return this.slice(Point.create(x, 1), 1, this.height);
  },


  sliceRow(y) {
    return this.slice(Point.create(1, y), this.width, 1);
  },


  match(grid) {
    if (this.width !== grid.width || this.height !== grid.height) {
      return false;
    }

    for (let i = 0; i < this.cells.length; i += 1) {
      if (this.cells[i] !== grid.cells[i]) {
        return false;
      }
    }

    return true;
  },


  indexOf(grid) {
    for (let y = 1; y <= this.height - grid.height + 1; y += 1) {
      for (let x = 1; x <= this.width - grid.width + 1; x += 1) {
        const point = Point.create(x,y);
        const subgrid = this.slice(point, grid.width, grid.height);
        if (subgrid.match(grid)) {
          return point;
        }
      }
    }
    return null;
  },


  includes(grid) {
    return this.indexOf(grid) !== null;
  }
};


const api = {
  create: (width, height, cells = []) => {
    const size = width * height;
    return Object.assign(
      Object.create(Grid),
      {
        width,
        height,
        size,
        cells: cells.length ? cells : times(size, index => index),
      });
    },
};


export default api;
