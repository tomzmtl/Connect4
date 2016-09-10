import { col, lowestOwnedIndex } from '../../grid/helpers/grid.js';


export default (state, action) => {
  switch (action.type) {

    case 'HIGHLIGHT_COLUMN':
      return state.tiles.map(tile => {
        if (tile.x === action.x) {
          return {
            ...tile,
            highlightedY: true,
          };
        }

        return tile;
      });

    case 'UNHIGHLIGHT_COLUMN':
      return state.tiles.map(tile => {
        if (tile.x !== action.x) {
          return tile;
        }
        return {
          ...tile,
          highlightedY: false,
        };
      });

    case 'PLACE_TILE': {
      const clicked = state.tiles[action.index];
      if (clicked.owner) {
        return state.tiles;
      }

      const index = lowestOwnedIndex(col(state.tiles, clicked.x));

      const updated = {
        ...state.tiles[index],
        owner: state.game.player,
      };

      return [
        ...state.tiles.slice(0, index),
        updated,
        ...state.tiles.slice(index + 1),
      ];
    }

    default: return state.tiles;
  }
};
