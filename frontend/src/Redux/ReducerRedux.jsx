import {ADD_TODO, TOGGLE_TODO, TOGGLE_ALL} from './ActionsRedux';

const initialState = {
  'checkall': false,
  'todos': []
};

function ReducerRedux(state = initialState, action) {
  // Get the values of the initial state
  const checkall = state.checkall;
  const todos = [...state.todos];
  switch (action.type) {
    case ADD_TODO:
      todos.push({
        'id': action.id,
        'text': action.text,
        'completed': false
      });

      return {
        'checkall': false,
        todos
      };
    case TOGGLE_TODO:
      return {
        checkall,
        'todos': todos.map(todo => {
          if (todo.id === action.id) {
            return {
              ...todo,
              'completed': !todo.completed
            };
          }

          return todo;
        })
      };
    case TOGGLE_ALL:
      return {
        'checkall': !checkall,
        'todos': todos.map(todo => {
          return {
            ...todo,
            'completed': !checkall
          };
        })
      };
    default:
      return state;
  }
}

export default ReducerRedux;
