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

import '../scss/app.scss';

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

const store = createStore(reducer, initialStore, applyMiddleware(thunk, logger));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
