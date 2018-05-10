from flask import Flask, render_template, request
from flask_mongoalchemy import MongoAlchemy

app = Flask (__name__, static_folder="../static/build", template_folder="../static")
# app.config['MONGOALCHEMY_DATABASE'] = 'todo_db'

# db = MongoAlchemy(app)

"""
class Todo(db.Document):
  text = db.StringField()
  completed = db.Boolean()
"""

@app.route('/')
def index():
  return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
    # app.run()

