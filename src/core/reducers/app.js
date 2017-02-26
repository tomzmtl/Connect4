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
    case 'TOGGLE_PLAYERS_SCREEN':
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

    case 'UPDATE_PLAYER_NAME': {
      const newPlayers = state.players.concat();
      newPlayers[action.index - 1] = action.name;

      const newState = {
        ...state,
        players: newPlayers,
      };

      saveGame(newState);

      return newState;
    }

    default:
      return state;
  }
};
