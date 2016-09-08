/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import counter from './reducers/counter';
import initStore from './store';

import '../scss/app.scss';

const store = createStore(counter, initStore());

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
});
