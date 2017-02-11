import grid from './grid';
import game from './game';

export default (state, action) => {
  switch (action.type) {

    case 'HIGHLIGHT_COLUMN':
    case 'UNHIGHLIGHT_COLUMN':
      return {
        ...state,
        grid: grid(state, action),
      };

    case 'PLACE_TILE':
      return {
        ...state,
        grid: grid(state, action),
        game: game(state, action),
      };

    default:
      return state;
  }
};
