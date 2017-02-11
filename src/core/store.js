import times from 'lodash.times';
import { indexToCoords } from '../grid/helpers/grid';
import { TILE_SIZE } from './config';
import Grid from './tiled/Grid';


const s = {
  game: {
    player: 1,
    turn: 1,
    winner: null,
  },
  grid: {
    ...Grid.create(7, 6, times(42, (index) => {
      const coords = indexToCoords(7, 6, index);
      return {
        index,
        x: coords[0],
        y: coords[1],
        owner: null,
        highlightedY: false,
      };
    })),
    tileSize: TILE_SIZE,
  },
};


export default s;
