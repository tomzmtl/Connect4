import grid from './grid';
import game from './game';
import ui from './ui';
import { saveGame } from '../helpers/storage';
import initialState from '../state';


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

    case 'NEXT_TURN': {
      const newState = {
        ...state,
        game: game(state, action),
      };

      saveGame(newState);

      return newState;
    }

    case 'TOGGLE_MAIN_MENU':
      return {
        ...state,
        ui: ui(state, action),
      };

    case 'RESET_GAME': {
      const newState = {
        ...initialState,
        ui: ui(state, action),
      };

      saveGame(newState);

      return newState;
    }

    default:
      return state;
  }
};
