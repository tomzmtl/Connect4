import times from 'lodash.times';
import { indexToCoords } from './helpers/grid';


const store = {
  grid: {
    width: 7,
    height: 6,
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
      };
    }),
  };
};
