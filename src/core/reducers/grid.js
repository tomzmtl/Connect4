import tiles from './tiles';


export default (state, action) => {
  switch (action.type) {
    case 'HIGHLIGHT_CELL':
    case 'UNHIGHLIGHT_CELL':
      return {
        ...state.grid,
        cells: tiles(state, action),
      };

    case 'PLACE_TILE': {
      return {
        ...state.grid,
        cells: tiles(state, action),
      };
    }

    default: return state.grid;
  }
};
