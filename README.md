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

## Building/Running
**Flask**
```
cd server/
```
To run the flask server, first ensure that both python, pip, and venv are installed on your machine. Then, set up the virtual environment.
```
python -m venv venv/
```
Install flask:
```
pip install Flask
```
_Windows_:
  ```bat
  set FLASK_APP=server.py
  set FLASK_ENV=development (development only)
  flask run
  ```
  _Linux_:
  ```bash
  . venv/Scripts/activate
  export FLASK_APP=server.py
  export FLASK_ENV=development (development only)
  flask run
  ```

To start development again after everything has been closed, make sure to re-run the virtual environment:
```
venv/Scripts/activate.bat
```


**npm**
```
cd static/
```
Download and install npm on your machine.  
Run ```npm install --save-dev```  
Finally you can build, build development (debug), or run a continuous build with the respective commands:
```
npm run build
npm run build-dev
npm run watch
```

**Lastly**  
Navigate to [localhost:5000](localhost:5000) to see the website in action!
