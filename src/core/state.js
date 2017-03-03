import times from 'lodash.times';
import Grid from './tiled/Grid';
import { indexToCoords } from '../grid/helpers/grid';
import { playerNames } from '../ui/constants';
import { randomInt } from './helpers/number';


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
    player: randomInt(1, 2),
    turn: 1,
    winner: null,
    winningCells: [],
  },
  grid: Grid.create(7, 6, times(42, initTiles)),
  players: playerNames,
  ui: {
    editPlayers: false,
    highlight: {
      x: null,
      y: null,
    },
    menuOpen: false,
  },
};
