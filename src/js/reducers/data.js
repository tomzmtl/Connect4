import { indexToCoords } from '../helpers/grid';


export default (state, action) => {
  switch (action.type) {
    case 'HIGHLIGHT_CELL':
      return state.data.map((cell) => {
        const coords = indexToCoords(state.grid.width, state.grid.height, action.index);

        const hY = cell.x === coords[0];
        const hX = cell.y === coords[1];

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
