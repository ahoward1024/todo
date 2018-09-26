let nextTodoId = 0;

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_ALL = 'TOGGLE_ALL';

export function addTodo(text) {
  return {
    'type': ADD_TODO,
    'id': nextTodoId += 1,
    text
  };
}

export function toggleTodo(id) {
  return {
    'type': TOGGLE_TODO,
    id
  };
}

export function toggleAll(checked) {
  return {'type': TOGGLE_ALL};
}
