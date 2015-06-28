from flask import Flask
from flask.ext.pymongo import PyMongo
# http://api.mongodb.org/python/current/api/bson/json_util.html
from bson.json_util import dumps

app = Flask(__name__)

app.config['MONGO_HOST'] = 'sjc-c9-0.objectrocket.com'
app.config['MONGO_PORT'] = '54075'
app.config['MONGO_DBNAME'] = 'pickaflick_db'
app.config['MONGO_USERNAME'] = 'pickaflick'
app.config['MONGO_PASSWORD'] = 'neoh@ck'

mongo = PyMongo(app)

@app.route('/')
def home_page():
    pickaflick_users = mongo.db.users.find()
    print pickaflick_users
    return dumps(pickaflick_users)

# http://flask.pocoo.org/
if __name__ == "__main__":
    app.run()