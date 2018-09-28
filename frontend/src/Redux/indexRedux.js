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

let store = null;

class indexRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'message': ''};
  }

  static async getStateFromServer(url) {
    try {
      const response = await fetch(url, {'method': 'GET'});
      const json = await response.json();
      json.forEach(todo => {
        initState.todos.push(todo.todo);
      });
      console.log(json);
    } catch (exception) {
      console.log(`Error getting state from server: ${exception}`);
    }
  }

  componentDidMount() {
    return indexRedux.getStateFromServer(URL).then(response => {
      store = createStore(ReducerRedux, initState);
      this.forceUpdate();
    });
  }

  render() {
    if (store !== null) {
      return (
        <Provider store={store}>
         <AppRedux />
        </Provider>
      );
    }

    return (
      <p>Loading</p>
    );
  }
}

export default indexRedux;
