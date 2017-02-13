const create = (x, y) => ({
  x,
  y,
});


const outOfBoundXIn = (point, grid) => {
  if (point.x > grid.width) {
    return 1;
  }

  if (point.x <= 0) {
    return -1;
  }

  return 0;
};


const outOfBoundYIn = (point, grid) => {
  if (point.y > grid.height) {
    return 1;
  }

  if (point.y <= 0) {
    return -1;
  }

  return 0;
};


const applyTo = (point, grid) => {
  let x = null;
  let y = null;

  if (outOfBoundXIn(point, grid) > 0) {
    x = grid.width;
  } else if (outOfBoundXIn(point, grid) < 0) {
    x = 0;
  }

  if (outOfBoundYIn(point, grid) > 0) {
    y = grid.height;
  } else if (outOfBoundYIn(point, grid) < 0) {
    y = 0;
  }

  if (x !== null || y !== null) {
    return create(x || point.x, y || point.y);
  }

  return point;
};


export default {
  applyTo,
  create,
  outOfBoundXIn,
  outOfBoundYIn,
};
