from pymongo import MongoClient
import config
import constants

host = config.db[constants.MONGO_HOST]
port = config.db[constants.MONGO_PORT]

client = MongoClient(host, port)
db = client[constants.MONGO_DB_NAME]
collection = db[constants.MONGO_DB_COLLECTION]

def get_todos():
  todos = []
  for todo in collection.find():
    del todo['_id']
    todos += [todo]
  return todos

def add_todo(dict):
  collection.insert_one(dict)

def toggle_todo(dict):
  complete = 'true' == dict['complete'].lower()
  id = int(dict['id'])
  collection.update_one(dict)

def drop_db():
  client.drop_database(db);
