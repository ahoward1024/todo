import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList"

require('../css/style.css');
require('../images/favicon.png');

ReactDOM.render(<TodoList />, document.getElementById("content"));
