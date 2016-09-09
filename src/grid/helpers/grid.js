export default null;


export const indexToCoords = (width, height, index) => [index % width, Math.floor(index / width)];


export const coordsToIndex = (width, x, y) => (y * width) + x;
