import React from 'react';
import PropTypes from 'prop-types';
import TodoRedux from './TodoRedux';
import {connect} from 'react-redux';
import {toggleTodo} from './ActionsRedux';

function mapStateToProps(state) {
  return {'todos': state.ReducerRedux.todos};
}

function mapDispatchToProps(dispatch) {
  return {'toggle': id => dispatch(toggleTodo(id))};
}

function TodoListRedux({todos, toggle}) {
  return (
  <div className="Todo">
    {todos.map(todo =>
      <TodoRedux
          key={todo.id}
          {...todo}
          onClick={() => toggle(todo.id)}
        />
      )}
    </div>
  );
}

TodoListRedux.propTypes = {
  'todos': PropTypes.arrayOf(PropTypes.shape({
    'id': PropTypes.number.isRequired,
    'completed': PropTypes.bool.isRequired,
    'text': PropTypes.string.isRequired
  }).isRequired).isRequired,
  'toggle': PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListRedux);
