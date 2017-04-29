import Grid from '../../core/tiled/Grid';
import Point from '../../core/tiled/Point';


export default (grid, x, y, ne = true) => {
  const indexes = ne ? [12, 9, 6, 3] : [15, 10, 5, 0];
  const topSlice = Grid.slice(grid, Point.create(x, y), 4, 4);
  const bottomSlice = Grid.slice(grid, Point.create(x, y + 1), 4, 4);

  const top = indexes.map(i => topSlice.cells[i]);
  const bottom = indexes.map(i => bottomSlice.cells[i]);

  return {
    top: top.map(c => (c ? c.owner : false)),
    bottom: bottom.map(c => (c ? c.owner !== null : true)),
  };
};
