import { col, lowestOwnedIndex } from '../../grid/helpers/grid.js';


export default ({ grid, game }, action) => {
  if (game.winner) {
    return grid.cells;
  }
  switch (action.type) {

    case 'HIGHLIGHT_COLUMN':
      return grid.cells.map((tile) => {
        if (tile.x === action.x) {
          return {
            ...tile,
            highlightedY: true,
          };
        }

        return tile;
      });

    case 'UNHIGHLIGHT_COLUMN':
      return grid.cells.map((tile) => {
        if (tile.x !== action.x) {
          return tile;
        }
        return {
          ...tile,
          highlightedY: false,
        };
      });

    case 'PLACE_TILE': {
      const clicked = grid.cells[action.index];
      if (clicked.owner) {
        return grid.cells;
      }

      const index = lowestOwnedIndex(col(grid.cells, clicked.x));

      const updated = {
        ...grid.cells[index],
        owner: game.player,
      };

      return [
        ...grid.cells.slice(0, index),
        updated,
        ...grid.cells.slice(index + 1),
      ];
    }

    default: return grid.cells;
  }
};
