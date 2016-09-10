import data from './data';
import game from './game';

export default (state, action) => {
  switch (action.type) {

    case 'HIGHLIGHT_CELL':
    case 'UNHIGHLIGHT_CELL':
      return {
        ...state,
        data: data(state, action),
      };

    case 'CLICK_CELL':
      return {
        ...state,
        data: data(state, action),
        game: game(state.game, action),
      };

    default:
      return state;
  }
};
