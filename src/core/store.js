import times from 'lodash.times';
import { indexToCoords } from '../grid/helpers/grid';
import Grid from './tiled/Grid';


const initTiles = (index) => {
  const coords = indexToCoords(7, 6, index);
  return {
    index,
    x: coords[0],
    y: coords[1],
    owner: null,
    highlightedY: false,
  };
};


const s = {
  game: {
    player: 1,
    turn: 1,
    winner: null,
  },
  grid: Grid.create(7, 6, times(42, initTiles)),
};


export default s;
