import times from 'lodash.times';
import Grid from './tiled/Grid';
import { indexToCoords } from '../grid/helpers/grid';
import { playerNames } from '../ui/constants';
import { randomInt } from './helpers/number';


const initTiles = (index) => {
  const coords = indexToCoords(7, 6, index);
  return {
    highlightedY: false,
    index,
    owner: null,
    x: coords[0],
    y: coords[1],
  };
};


const store = {
  game: {
    draw: false,
    locked: false,
    player: randomInt(1, 2),
    scores: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    turn: 1,
    winner: null,
    winningCells: [],
  },
  grid: Grid.create(7, 6, times(42, initTiles)),
  players: [
    {
      name: playerNames[0],
      cpu: false,
    },
    {
      name: playerNames[1],
      cpu: true,
    },
  ],
  ui: {
    editPlayers: false,
    highlight: {
      x: null,
      y: null,
    },
    menuOpen: false,
  },
};


export default store;
