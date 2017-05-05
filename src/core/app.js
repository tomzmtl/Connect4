/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/app';
import initialStore from './store';
import App from './containers/AppContainer';
import ai from './middleware/ai';

import '../scss/app.scss';

// const initialStore = {
//   game: {
//     draw: false,
//     locked: true,
//     player: 2,
//     scores: [
//       [
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//         0,
//       ],
//       [
//         0,
//         1,
//         0,
//         0,
//         0,
//         0,
//         0,
//       ],
//     ],
//     turn: 20,
//     winner: null,
//     winningCells: [],
//   },
//   grid: {
//     width: 7,
//     height: 6,
//     size: 42,
//     cells: [
//       {
//         highlightedY: false,
//         index: 0,
//         owner: null,
//         x: 0,
//         y: 0,
//       },
//       {
//         highlightedY: false,
//         index: 1,
//         owner: null,
//         x: 1,
//         y: 0,
//       },
//       {
//         highlightedY: false,
//         index: 2,
//         owner: null,
//         x: 2,
//         y: 0,
//       },
//       {
//         highlightedY: false,
//         index: 3,
//         owner: null,
//         x: 3,
//         y: 0,
//       },
//       {
//         highlightedY: false,
//         index: 4,
//         owner: null,
//         x: 4,
//         y: 0,
//       },
//       {
//         highlightedY: false,
//         index: 5,
//         owner: null,
//         x: 5,
//         y: 0,
//       },
//       {
//         highlightedY: false,
//         index: 6,
//         owner: null,
//         x: 6,
//         y: 0,
//       },
//       {
//         highlightedY: false,
//         index: 7,
//         owner: null,
//         x: 0,
//         y: 1,
//       },
//       {
//         highlightedY: false,
//         index: 8,
//         owner: null,
//         x: 1,
//         y: 1,
//       },
//       {
//         highlightedY: false,
//         index: 9,
//         owner: null,
//         x: 2,
//         y: 1,
//       },
//       {
//         highlightedY: false,
//         index: 10,
//         owner: null,
//         x: 3,
//         y: 1,
//       },
//       {
//         highlightedY: false,
//         index: 11,
//         owner: null,
//         x: 4,
//         y: 1,
//       },
//       {
//         highlightedY: false,
//         index: 12,
//         owner: null,
//         x: 5,
//         y: 1,
//       },
//       {
//         highlightedY: false,
//         index: 13,
//         owner: null,
//         x: 6,
//         y: 1,
//       },
//       {
//         highlightedY: false,
//         index: 14,
//         owner: null,
//         x: 0,
//         y: 2,
//       },
//       {
//         highlightedY: false,
//         index: 15,
//         owner: null,
//         x: 1,
//         y: 2,
//       },
//       {
//         highlightedY: false,
//         index: 16,
//         owner: null,
//         x: 2,
//         y: 2,
//       },
//       {
//         highlightedY: false,
//         index: 17,
//         owner: null,
//         x: 3,
//         y: 2,
//       },
//       {
//         highlightedY: false,
//         index: 18,
//         owner: 2,
//         x: 4,
//         y: 2,
//       },
//       {
//         highlightedY: false,
//         index: 19,
//         owner: null,
//         x: 5,
//         y: 2,
//       },
//       {
//         highlightedY: false,
//         index: 20,
//         owner: 1,
//         x: 6,
//         y: 2,
//       },
//       {
//         highlightedY: false,
//         index: 21,
//         owner: null,
//         x: 0,
//         y: 3,
//       },
//       {
//         highlightedY: false,
//         index: 22,
//         owner: null,
//         x: 1,
//         y: 3,
//       },
//       {
//         highlightedY: false,
//         index: 23,
//         owner: 1,
//         x: 2,
//         y: 3,
//       },
//       {
//         highlightedY: false,
//         index: 24,
//         owner: 2,
//         x: 3,
//         y: 3,
//       },
//       {
//         highlightedY: false,
//         index: 25,
//         owner: 2,
//         x: 4,
//         y: 3,
//       },
//       {
//         highlightedY: false,
//         index: 26,
//         owner: null,
//         x: 5,
//         y: 3,
//       },
//       {
//         highlightedY: false,
//         index: 27,
//         owner: 2,
//         x: 6,
//         y: 3,
//       },
//       {
//         highlightedY: false,
//         index: 28,
//         owner: null,
//         x: 0,
//         y: 4,
//       },
//       {
//         highlightedY: false,
//         index: 29,
//         owner: null,
//         x: 1,
//         y: 4,
//       },
//       {
//         highlightedY: false,
//         index: 30,
//         owner: 2,
//         x: 2,
//         y: 4,
//       },
//       {
//         highlightedY: false,
//         index: 31,
//         owner: 1,
//         x: 3,
//         y: 4,
//       },
//       {
//         highlightedY: false,
//         index: 32,
//         owner: 1,
//         x: 4,
//         y: 4,
//       },
//       {
//         highlightedY: false,
//         index: 33,
//         owner: null,
//         x: 5,
//         y: 4,
//       },
//       {
//         highlightedY: false,
//         index: 34,
//         owner: 1,
//         x: 6,
//         y: 4,
//       },
//       {
//         highlightedY: false,
//         index: 35,
//         owner: null,
//         x: 0,
//         y: 5,
//       },
//       {
//         highlightedY: false,
//         index: 36,
//         owner: null,
//         x: 1,
//         y: 5,
//       },
//       {
//         highlightedY: false,
//         index: 37,
//         owner: 2,
//         x: 2,
//         y: 5,
//       },
//       {
//         highlightedY: false,
//         index: 38,
//         owner: 1,
//         x: 3,
//         y: 5,
//       },
//       {
//         highlightedY: false,
//         index: 39,
//         owner: 1,
//         x: 4,
//         y: 5,
//       },
//       {
//         highlightedY: false,
//         index: 40,
//         owner: null,
//         x: 5,
//         y: 5,
//       },
//       {
//         highlightedY: false,
//         index: 41,
//         owner: 2,
//         x: 6,
//         y: 5,
//       },
//     ],
//   },
//   players: [
//     {
//       name: 'Player 1',
//       cpu: false,
//     },
//     {
//       name: 'Player 2',
//       cpu: false,
//     },
//   ],
//   ui: {
//     editPlayers: false,
//     highlight: {
//       x: null,
//       y: null,
//     },
//     menuOpen: false,
//   },
// };

const logger = createLogger({
  collapsed: true,
  diff: true,
  predicate: (getState, action) => {
    if (action.type.includes('HIGHLIGHT_CELL')) {
      return false;
    }
    return true;
  },
});

const store = createStore(reducer, initialStore, applyMiddleware(ai, thunk, logger));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
