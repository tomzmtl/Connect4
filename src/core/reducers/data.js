
export default (state, action) => {
  switch (action.type) {

    case 'HIGHLIGHT_TILE':
      return state.data.map((tile) => {
        const hY = tile.x === state.data[action.index].x;
        const hX = tile.y === state.data[action.index].y;

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
      return state.data.map((tile) => ({
        ...tile,
        highlightedX: false,
        highlightedY: false,
      }));

    case 'CLICK_TILE': {
      if (state.data[action.index].owner) {
        return state.data;
      }

      const clicked = {
        ...state.data[action.index],
        owner: state.game.player,
      };

      return [
        ...state.data.slice(0, action.index),
        clicked,
        ...state.data.slice(action.index + 1),
      ];
    }

    default: return state.data;
  }
};
