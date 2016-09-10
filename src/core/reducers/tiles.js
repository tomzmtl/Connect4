
export default (state, action) => {
  switch (action.type) {

    case 'HIGHLIGHT_TILE':
      return state.tiles.map((tile) => {
        const hY = tile.x === state.tiles[action.index].x;
        const hX = tile.y === state.tiles[action.index].y;

        if (hX === tile.highlightedX && hY === tile.highlightedY) {
          return tile;
        }

        const newTile = {
          ...tile,
        };

        if (hX !== tile.highlightedX) {
          newTile.highlightedX = hX;
        }

        if (hY !== tile.highlightedY) {
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

    case 'CLICK_TILE': {
      if (state.tiles[action.index].owner) {
        return state.tiles;
      }

      const clicked = {
        ...state.tiles[action.index],
        owner: state.game.player,
      };

      return [
        ...state.tiles.slice(0, action.index),
        clicked,
        ...state.tiles.slice(action.index + 1),
      ];
    }

    default: return state.tiles;
  }
};