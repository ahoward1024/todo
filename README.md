# TODO

A simple todo list written as an exercise in full stack development.
Written with Node.js modules, React.js, and Flask.

## Thanks to:
Angela Juvet Branaes - https://github.com/angineering/FullStackTemplate
SO - https://stackoverflow.com/questions/4148499/how-to-style-a-checkbox-using-css#4148544
CSS Checkboxes - http://www.csscheckbox.com/checkbox/42696/very-light-blue/
Aaron Batilo - https://github.com/abatilo/coloradogeekjobs
ReactJS - https://reactjs.org/ for the TODO application example

## Running

###Flask
To run the flask server, first ensure that both python, pip, venv, and the flask microframework are installed on your machine.
```pip install Flask
```cd server/
```
_Windows_:
  ```bat
  venv/Scripts/activate.bat
  set FLASK_APP=server.py
  set FLASK_ENV=development (development only)
  flask run
  ```
  _Linux_:
  ```bash
  . venv/Scripts/activate
  set FLASK_APP=server.py
  set FLASK_ENV=development (development only)
  flask run
  ```

###NPM
Download and install npm on your machine.
Run ```npm install --save-dev```
To build the html, css, and js files into a static frontend install npm and run
```npm run build``` or ```npm run build-dev``` to build or 
```npm run watch``` for live updates.

