import tiles from './tiles';


export default (state, action) => {
  switch (action.type) {
    case 'HIGHLIGHT_COLUMN':
    case 'UNHIGHLIGHT_COLUMN':
    case 'PLACE_TILE':
      return {
        ...state.grid,
        cells: tiles(state, action),
      };

    default: return state.grid;
  }
};
