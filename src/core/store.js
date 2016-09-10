import times from 'lodash.times';
import { indexToCoords } from '../grid/helpers/grid';
import { TILE_SIZE } from './config';


const store = {
  game: {
    player: 1,
  },
  grid: {
    width: 7,
    height: 6,
    tileSize: TILE_SIZE,
  },
  tiles: [],
};

export default () => {
  const { width, height } = store.grid;
  return {
    ...store,
    tiles: times(width * height, (index) => {
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
