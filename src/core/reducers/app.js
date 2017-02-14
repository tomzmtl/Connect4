import grid from './grid';
import game from './game';
import ui from './ui';

export default (state, action) => {
  switch (action.type) {

    case 'HIGHLIGHT_CELL':
    case 'UNHIGHLIGHT_CELL':
      return {
        ...state,
        grid: grid(state, action),
        ui: ui(state, action),
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
