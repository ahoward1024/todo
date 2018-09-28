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
    print(dict)
    dict['_id'] = dict['todo']['id']
    collection.insert_one(dict)


def toggle_todo(dict):
    print(dict)
    completed = dict['completed']
    id = int(dict['id'])
    collection.update_one({'_id': id}, {'$set': {'todo.completed': completed}})


def toggle_todo_all(dict):
    completed = dict['completed']
    collection.update_many({}, {'$set': {'todo.completed': completed}})


def drop_db():
    client.drop_database(db)
