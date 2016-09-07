export default (state, action) => {
  switch (action.type) {
    case 'HIGHLIGHT_CELL':
      return state.data.map((cell) => {
        const hX = cell.x === action.x;
        const hY = cell.y === action.y;

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


    default: return state.data;
  }
};
