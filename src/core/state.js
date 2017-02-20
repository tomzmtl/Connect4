import times from 'lodash.times';
import Grid from './tiled/Grid';
import { indexToCoords } from '../grid/helpers/grid';


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


export default {
  game: {
    draw: false,
    locked: false,
    player: 1,
    turn: 1,
    winner: null,
  },
  grid: Grid.create(7, 6, times(42, initTiles)),
  ui: {
    highlight: {
      x: null,
      y: null,
    },
    menuOpen: false,
  },
};
