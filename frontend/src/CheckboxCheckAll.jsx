import React from "react"

/*
  This component renders out a checkbox that the user can use to check or uncheck all of the
  todo items at once.
*/
export default class CheckboxCheckAll extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return(
      <div>
        <input
          type="checkbox"
          className="styled-checkbox"
          id="check-all"
          name="checkbox-checkall-name"
          checked={this.props.checked}
          onChange={this.handleChange}
        />
        <label htmlFor="check-all" className="styled-checkbox-label">Check all</label>
      </div>
    );
  }

  handleChange(e) {
    this.props.toggleAllCheckboxes(e.target.checked);
  }
}
