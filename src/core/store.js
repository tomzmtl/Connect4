import times from 'lodash.times';
import { indexToCoords } from '../grid/helpers/grid';
import { CELL_SIZE } from './config';


const store = {
  grid: {
    width: 7,
    height: 6,
    cellSize: CELL_SIZE,
  },
  data: [],
};

export default () => {
  const { width, height } = store.grid;
  return {
    ...store,
    data: times(width * height, (index) => {
      const coords = indexToCoords(width, height, index);
      return {
        x: coords[0],
        y: coords[1],
        highlightedX: false,
        highlightedY: false,
        owner: null,
      };
    }),
  };
};
