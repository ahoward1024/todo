import React from 'react';
import AddTodoRedux from './AddTodoRedux';
import CheckAllRedux from './CheckAllRedux';
import TodoListRedux from './TodoListRedux';

function AppRedux() {
  return (
    <div>
      <h1 className="H1-Animation">Todo Redux</h1>
      <AddTodoRedux />
      <CheckAllRedux />
      <TodoListRedux />
    </div>
  );
}

export default AppRedux;
