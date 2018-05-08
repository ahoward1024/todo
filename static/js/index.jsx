import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList"

// Needed so we can create a hashed version of the assets in the build directory
// for the index.html to find during runtime
require('../css/style.css');
require('../images/favicon.png');

// Renders the DOM elements in the content section of the index.html file
ReactDOM.render(<TodoList />, document.getElementById("content"));
