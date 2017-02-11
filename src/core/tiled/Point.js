const Point = {
  // standard (1-based)
  x: null,
  y: null,


  applyTo(grid) {
    if (this.outOfBoundXIn(grid) > 0) {
      this.x = grid.width;
    } else if (this.outOfBoundXIn(grid) < 0) {
      this.x = 0;
    }

    if (this.outOfBoundYIn(grid) > 0) {
      this.y = grid.height;
    } else if (this.outOfBoundYIn(grid) < 0) {
      this.y = 0;
    }
  },


  outOfBoundXIn(grid) {
    if (this.x > grid.width) {
      return 1;
    }

    if (this.x <= 0) {
      return -1;
    }

    return 0;
  },


  outOfBoundYIn(grid) {
    if (this.y > grid.height) {
      return 1;
    }

    if (this.y <= 0) {
      return -1;
    }

    return 0;
  }
};


export default {
  create: (x, y) => Object.assign(
    Object.create(Point),
    {
      x,
      y,
    }),
};
