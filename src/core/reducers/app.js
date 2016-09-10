import tiles from './tiles';
import game from './game';

export default (state, action) => {
  switch (action.type) {

    case 'HIGHLIGHT_TILE':
    case 'UNHIGHLIGHT_TILE':
      return {
        ...state,
        tiles: tiles(state, action),
      };

    case 'CLICK_TILE':
      return {
        ...state,
        tiles: tiles(state, action),
        game: game(state.game, action),
      };

    default:
      return state;
  }
};
