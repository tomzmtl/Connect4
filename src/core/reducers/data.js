
export default (state, action) => {
  switch (action.type) {
    case 'HIGHLIGHT_CELL':
      return state.data.map((cell) => {
        const hY = cell.x === state.data[action.index].x;
        const hX = cell.y === state.data[action.index].y;

        if (hX === cell.highlightedX && hY === cell.highlightedY) {
          return cell;
        }

        const newCell = {
          ...cell,
        };

        if (hX !== cell.highlightedX) {
          newCell.highlightedX = hX;
        }

        if (hY !== cell.highlightedY) {
          newCell.highlightedY = hY;
        }

        return newCell;
      });

    case 'UNHIGHLIGHT_CELL':
      return state.data.map((cell) => ({
        ...cell,
        highlightedX: false,
        highlightedY: false,
      }));

    case 'CLICK_CELL': {
      if (state.data[action.index].owner) {
        return state.data;
      }

      const clicked = {
        ...state.data[action.index],
        owner: 1,
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
