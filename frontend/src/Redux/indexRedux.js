import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppRedux from './AppRedux';
import RootReducerRedux from './RootReducerRedux';

const store = createStore(RootReducerRedux);

function indexRedux() {
  return (
    <Provider store={store}>
      <AppRedux />
    </Provider>
  );
}

export default indexRedux;
