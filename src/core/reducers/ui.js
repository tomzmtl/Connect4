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

    default: return ui;
  }
};
