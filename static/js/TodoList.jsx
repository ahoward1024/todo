import React from "react"
import ReactDOM from "react-dom"

// The Todo application element
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3 align="center"> todo </h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?&nbsp;</label>
          <input id="new-todo" onChange={this.handleChange} value={this.state.text}/>
          <button>Add #{this.state.items.length + 1}</button>
        </form>
        <CheckAllBox/>
        <hr width="%50"></hr>
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
      id: Date.now(),
      value: false
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class CheckAllBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return(
      <div>
      <form key="checkall-checkbox-form">
        <input 
          type="checkbox"
          className="styled-checkbox"
          id="check-all"
          name="checkbox-checkall-name"
          onChange={this.handleChange}
        />
        <label htmlFor="check-all" className="styled-checkbox-label">Check all</label>
      </form>
      </div>
    );
  }

  handleChange(e) {
    console.log(e.target.id + " is " + e.target.checked);
  }
}

// A list of todo checkbox elements that use custom css checkboxes
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
      {this.props.items.map(item => (
        <form key={item.id}>
          <input 
            type="checkbox"
            className="styled-checkbox"
            id={item.id}
            name={item.text}
            onChange={this.handleChange}
          />
          <label htmlFor={item.id} className="styled-checkbox-label">{item.text}</label>
        </form>
      ))}
      </div>
    );
  }

  handleChange(e) {
    e.target.value = e.target.checked;
    console.log("" + e.target.id + ": " + e.target.name + " is " + e.target.checked + " [" + e.target.value +"]");
    for(var i = 0; i < this.props.items.length; i++) {
      console.log(this.props.items[0]);
    }
  }
}
