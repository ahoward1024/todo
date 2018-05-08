import React from "react"
import ReactDOM from "react-dom"

// The Todo application element
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3 align="center"> todo </h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?&nbsp;
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

// A list of todo checkbox elements that use custom css checkboxes
class TodoList extends React.Component {
  render() {
    return (
      <div>
      {this.props.items.map(item => (
        <form key={item.id}>
          <input type="checkbox" className="styled-checkbox" id={item.id}/>
          <label htmlFor={item.id} className="styled-checkbox-label">{item.text}</label>
        </form>
      ))}
      </div>
    );
  }
}
