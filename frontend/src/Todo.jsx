import React from "react"

/*
  This is a 'todo' element. All of the state of the application is stored in the application's
  state list object: the text of the todo item, an id for rendering, and uses the done parameter
  to determine whether to render a checked or unchecked checkbox.
*/
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <input 
          type="checkbox"
          className="styled-checkbox"
          id={this.props.id}
          checked={this.props.done}
          onChange={this.handleChange}
        />
        <label htmlFor={this.props.id} className="styled-checkbox-label">{this.props.text}</label>
      </div>
    );
  }

  handleChange(e) {
    this.props.toggleCheckbox(e.target.id);
  }
}
