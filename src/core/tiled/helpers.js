export default null;


export const coordsToIndex = (width, x, y) => ((y - 1) * width) + (x - 1);

export const indexToCoords = (width, height, index) =>
  Point.create(index % width, Math.floor(index / width));
