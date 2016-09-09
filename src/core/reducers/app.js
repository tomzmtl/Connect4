import data from './data';

export default (state, action) => {
  switch (action.type) {

    case 'HIGHLIGHT_CELL':
    case 'UNHIGHLIGHT_CELL':
    case 'CLICK_CELL':
      return {
        ...state,
        data: data(state, action),
      };

    default:
      return state;
  }
};
