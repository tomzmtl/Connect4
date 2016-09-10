import { col, lowestOwnedIndex } from '../../grid/helpers/grid.js';


export default (state, action) => {
  switch (action.type) {

    case 'HIGHLIGHT_TILE':
      return state.tiles.map((tile) => {
        const hY = tile.x === state.tiles[action.index].x;

        const newTile = {
          ...tile,
        };

        if (hY !== tile.highlightedY && !tile.owner) {
          newTile.highlightedY = hY;
        }

        return newTile;
      });

    case 'UNHIGHLIGHT_TILE':
      return state.tiles.map((tile) => ({
        ...tile,
        highlightedX: false,
        highlightedY: false,
      }));

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
