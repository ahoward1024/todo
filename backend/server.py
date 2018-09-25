from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import db
import json

app = Flask (__name__)
cors = CORS(app)

@app.route('/get', methods = ['GET'])
def todos_get():
  return json.dumps(db.get_todos())

@app.route('/add', methods = ['POST'])
def todos_add():
  db.add_todos(request.json)
  return 'ok', 201

@app.route('/complete', methods = ['PUT'])
def todos_complete():
  db.complete_todos(request.json)
  return 'ok', 200

@app.route('/testing', methods = ['GET'])
def test():
  return jsonify({'message': '✔️ The server is up! 👌'})

@app.route('/')
def index():
  return render_template("index.html")

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True) # DEBUG
    # app.run(host='0.0.0.0', debug=False) # PRODUCTION

