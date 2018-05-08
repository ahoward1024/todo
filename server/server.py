from flask import Flask, render_template, jsonify, request
from pymongo import MongoClient

app = Flask (__name__, static_folder="../static/build", template_folder="../static")

client = MongoClient('mongodb://localhost:27017/')
database = client.todo_database
collection = database.todo_collection

@app.route("/")
def index():
  todo_list = collection.find()
  return render_template("index.html", content=todo_list)

if __name__ == "__main__":
    app.run(debug=True)
    # app.run()

