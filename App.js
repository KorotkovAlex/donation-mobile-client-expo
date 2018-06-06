import React from 'react';
import Start from './src/app/App.js';

import { Provider } from 'react-redux';

import store from './src/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Start />
      </Provider>
    );
  }
}
