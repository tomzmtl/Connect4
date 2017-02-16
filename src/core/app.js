/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/app';
import initialStore from './store';
import App from './components/App';

import './scss/app.scss';

const logger = createLogger({
  collapsed: true,
  diff: true,
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
