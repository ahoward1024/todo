import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleAll} from './ActionsRedux';

function mapStateToProps(state) {
  return {'checked': state.ReducerRedux.checkall};
}

function CheckAllRedux({dispatch, checked}) {
  return (
    <div className="CheckboxCheckAll">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
            dispatch(toggleAll());
          }
        }
      >
      </input>
      <label>
        Check All
      </label>
    </div>
  );
}

CheckAllRedux.propTypes = {
  'dispatch': PropTypes.func.isRequired,
  'checked': PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(CheckAllRedux);
