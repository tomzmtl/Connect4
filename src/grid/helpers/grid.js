export default null;


export const indexToCoords = (width, height, index) => [index % width, Math.floor(index / width)];


export const coordsToIndex = (width, x, y) => (y * width) + x;


export const col = (tiles, x) => tiles.filter(tile => tile.x === x);


export const lowestOwnedIndex = (column) => {
  for (const tile of column.reverse()) {
    if (tile.owner === null) {
      return tile.index;
    }
  }
  return null;
};
