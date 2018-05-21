# TODO

A simple todo list written as an exercise in full stack development.
Written with Node.js modules, React.js, and Flask.

## Thanks to:
Angela Juvet Branaes - https://github.com/angineering/FullStackTemplate  
SO - https://stackoverflow.com/questions/4148499/how-to-style-a-checkbox-using-css#4148544  
CSS Checkboxes - http://www.csscheckbox.com/checkbox/42696/very-light-blue/  
Aaron Batilo - https://github.com/abatilo/coloradogeekjobs  
ReactJS - https://reactjs.org/ for the TODO application example  
React Tips - http://react.tips/checkboxes-in-react/  
CoolBoi567's Example - https://github.com/CoolBoi567/To-Do-List---Flask-MongoDB-Example  
MongoDB Python tutorial - http://api.mongodb.com/python/current/tutorial.html#tutorial  

# Initial setup

You will need three things to run the todo app:
- Python
- NPM
- MongoDB

## MongoDB (currently unused!!)
Simply install MongoDB for your platform.

## Python
First you should set up a virtual environment. I personally used venv.
To set up for the first time use `python -m venv /venv`

The server runs on the Flask micro framework. After setting up the virtual environment, install
Flask with `pip install Flask`

## NPM
Dowload and install NPM on your machine. Then run `npm install --save` to download all dependencies.

# Building

## Server
`cd backend/`

Set up the virtual environment and register the environment variables with the begin scripts:  
Windows: Run `begin.bat`  
Linux: Run `./begin.sh`  
Now run the server with `flask run` to make sure it works. 

## Frontend
`cd frontend/`  

Build the project with `npm run build`  
Finally run the frontend with `npm run start`  

# Running the app!
- Run your MongoDB instance with `mongod --dbpath <path_to_project>/data/db` to start the database.
- Run `flask run` from the backend folder
- Run `npm run start` fromt the frontend folder

`npm run start` should open a browser window to [http://localhost:3000](http://localhost:3000) where you can see the client in action!
