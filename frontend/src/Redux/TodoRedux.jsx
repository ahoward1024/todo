import React from 'react';
import PropTypes from 'prop-types';

function TodoRedux({onClick, completed, text}) {
  return (
    <div className="TodoItem-Animate">
      <input
        type="checkbox"
        checked={completed}
        onChange={onClick}
        style={{'textDecoration': completed ? 'line-through' : 'none'}}
      />
      <label>
        {text}
      </label>
    </div>
  );
}

TodoRedux.propTypes = {
  'onClick': PropTypes.func.isRequired,
  'completed': PropTypes.bool.isRequired,
  'text': PropTypes.string.isRequired
};

export default TodoRedux;
