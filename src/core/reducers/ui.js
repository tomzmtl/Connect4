export default ({ ui }, action) => {
  switch (action.type) {
    case 'HIGHLIGHT_CELL':
      return {
        ...ui,
        highlight: {
          x: action.x,
          y: action.y,
        },
      };

    case 'UNHIGHLIGHT_CELL':
      return {
        ...ui,
        highlight: {
          x: null,
          y: null,
        },
      };

    case 'TOGGLE_MAIN_MENU':
      return {
        ...ui,
        menuOpen: !ui.menuOpen,
      };

    case 'TOGGLE_PLAYERS_SCREEN': {
      const newState = {
        ...ui,
        editPlayers: !ui.editPlayers,
      };

      if (newState.editPlayers) {
        newState.menuOpen = false;
      }

      return newState;
    }

    case 'RESET_GAME':
      return {
        ...ui,
        menuOpen: false,
      };

    default: return ui;
  }
};
