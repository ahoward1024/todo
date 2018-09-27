import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppRedux from './AppRedux';
import ReducerRedux from './ReducerRedux';

const initState = {
  'checkall': false,
  'todos': []
};
const URL = 'http://localhost:5000/todos.get';

const store = createStore(ReducerRedux, initState);

class indexRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'db': ''};
  }

  static async getStateFromServer(url) {
    try {
      const response = await fetch(url, {'method': 'GET'});
      const json = await response.json();
      console.log(json);
    } catch (exception) {
      console.log(`Error getting state from server: ${exception}`);
    }
  }

  componentDidMount() {
    indexRedux.getStateFromServer(URL);
  }

  render() {
    return (
      <Provider store={store}>
        <AppRedux />
      </Provider>
    );
  }
}

export default indexRedux;
