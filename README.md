[![Build Status](https://travis-ci.com/ahoward1024/todo.svg?branch=master)](https://travis-ci.com/ahoward1024/todo)


# TODO

A simple todo list written as an exercise in full stack development.
Written with Node.js modules, React.js, and Flask.

## Thanks to:
Angela Juvet Branaes - https://github.com/angineering/FullStackTemplate

SO - https://stackoverflow.com/questions/4148499/how-to-style-a-checkbox-using-css#4148544

CSS Checkboxes - http://www.csscheckbox.com/checkbox/42696/very-light-blue/

Aaron Batilo - https://github.com/abatilo/docker-compose-todo
             - https://github.com/abatilo/coloradogeekjobs

ReactJS - https://reactjs.org/ for the TODO application example

React Tips - http://react.tips/checkboxes-in-react/

CoolBoi567's Example - https://github.com/CoolBoi567/To-Do-List---Flask-MongoDB-Example

MongoDB Python tutorial - http://api.mongodb.com/python/current/tutorial.html#tutorial

Ohans Emmanuel - https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6

And of course the Redux official examples - https://github.com/reduxjs/redux/tree/master/examples

# Initial setup

You will need three things to run the todo app:
- Python
- npm
- MongoDB

## Python
First you should set up a virtual environment. I personally used pipenv.
To set up for the first time use `pipenv install`

## npm
Dowload and install NPM on your machine. Then run `npm install --save` to
download all dependencies.

## MongoDB
Simply install MongoDB for your platform.

# Running the app!
- Make sure you are in the root folder
- Run MongoDB with `mongod --dbpath data/` to start the database.
- `cd` to the backend folder
- Set the flask environment variable `(set|export) FLASK_APP=server.py`
- Run `flask run`
- `cd` to the frontend folder
- Run `npm run start`

`npm run start` should open a browser window to [http://localhost:3000](http://localhost:3000) where you can see the client in action!
