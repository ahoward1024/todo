import React from "react"
import ReactDOM from "react-dom"
import Todo from "./Todo"
import CheckboxCheckAll from "./CheckboxCheckAll"

/*
  This is the main application called from the index.jsx file. The application holds the state of
  the todo list, as well as the new todo input text box and the status of the 'check all' box.
*/
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list: [], text: '', checkall: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.toggleAllCheckboxes = this.toggleAllCheckboxes.bind(this);
  }

  // Renders the full application. A 'todo' header, an input box form with a submit button,
  // a 'check all' checkbox that checks or unchecks all checkboxes in the state list, and
  // finally the list of todo items.
  render() {
    return (
      <div>
        <h1 className="styled-header" align="center"> todo </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="styled-input"
            id="new-todo"
            placeholder="What needs to be done?"
            onChange={this.handleChange}
            value={this.state.text}
          />&nbsp;
          <button className="styled-button">
            Add #{this.state.list.length + 1}
          </button>
        </form>
        <CheckboxCheckAll
          list={this.state.list}
          toggleAllCheckboxes={this.toggleAllCheckboxes}
          checked={this.state.checkall}
        />
        <hr width="%50"></hr>
        <div>
        {
          this.state.list.map(item => (
            <Todo
              key={item.id}
              text={item.text}
              id={item.id}
              done={item.done}
              toggleCheckboxCallback={this.toggleCheckbox}
            />
          ))
        }
        </div>
      </div>
    );
  }

  // NOTE: Is this going to be too slow? We have to iterate over potentially the entire list
  // just to check and uncheck each box.
  toggleCheckbox(id, value) {
    for(var i = 0; i < this.state.list.length; i++) {
      if(this.state.list[i].id == id) {
       // https://stackoverflow.com/questions/29537299/react-how-do-i-update-state-item1-on-setstate-with-jsfiddle#38378350
       this.state.list[i].done = !this.state.list[i].done;
       this.forceUpdate();
       break; // Optimization
      }
    }
  }

  // NOTE: This may also be pretty slow, but I'm not sure if there is any better way to do this.
  // Probably not...
  toggleAllCheckboxes(value) {
    // https://stackoverflow.com/questions/29537299/react-how-do-i-update-state-item1-on-setstate-with-jsfiddle#38378350
    for(var i = 0; i < this.state.list.length; ++i) {
      this.state.list[i].done = value;
    }
    // (???): Can this be last? Do I only need to call it once or every time I change the state
    // of a component in the state object (so far only calling it once seems to work)?
    this.forceUpdate();
    this.setState({checkall: !this.state.checkall});
  }

  // Updates the state object's text member to the string in the text field
  handleChange(e) {
    this.setState({text: e.target.value});
  }

  // Creates a new object to insert into the state's list object. Only does so if the length of
  // the string is at least one character (eg. not zero) and then resets the text area back to
  // an empty string.
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const cb = {text: this.state.text, id: Date.now(), done: false};
    this.setState(prevState => ({
      list: prevState.list.concat(cb),
      text: ''
    }));
    this.setState({checkall: false});
  }
}
