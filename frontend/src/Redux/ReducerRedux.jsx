import {ADD_TODO, TOGGLE_TODO, TOGGLE_ALL} from './ActionsRedux';
import {sendNewTodo, sendToggleTodo, sendToggleAll} from './ServerRedux';

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
      const id = Date.now();
      const newTodo = {
        id,
        'text': action.text,
        'completed': false
      };
      todos.push(newTodo);

      sendNewTodo(newTodo);

      return {
        'checkall': false,
        todos
      };
    case TOGGLE_TODO:
      return {
        checkall,
        'todos': todos.map(todo => {
          const newCompleted = !todo.completed;
          if (todo.id === action.id) {
            sendToggleTodo(todo.id, newCompleted);

            return {
              ...todo,
              'completed': newCompleted
            };
          }

          return todo;
        })
      };
    case TOGGLE_ALL:
    sendToggleAll(!checkall);

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
