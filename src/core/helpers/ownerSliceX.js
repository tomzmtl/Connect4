import Grid from '../../core/tiled/Grid';
import Point from '../../core/tiled/Point';


export default (grid, x, y) => {
  const topSlice = Grid.slice(grid, Point.create(x, y), 4, 1);
  const bottomSlice = Grid.slice(grid, Point.create(x, y + 1), 4, 1);

  return {
    top: topSlice.cells.map(c => (c ? c.owner : false)),
    bottom: y === 6 ?
      [true, true, true, true] : bottomSlice.cells.map(c => (c ? c.owner !== null : true)),
  };
};
