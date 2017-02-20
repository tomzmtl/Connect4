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

    case 'RESET_GAME':
      return {
        ...ui,
        menuOpen: false,
      };

    default: return ui;
  }
};
