from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from models import *
from datetime import datetime

portHTTP = 9999

def create_app():
  app = Flask(__name__)
  CORS(app)
  app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db/sensors.db'
  app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
  db.init_app(app)
  return app

app = create_app()

@app.route('/', methods=['GET'])
def home():
  return "... sensors server running on port %d\n"%portHTTP

@app.route('/api/rooms', methods=['GET'])
def getRooms():
  rooms = Rooms.query.order_by(Rooms.updated_at.desc()).limit(100);
  result = []
  for room in rooms:
    dict = room.as_dict()
    result.append(dict)
  response = make_response( jsonify({"rooms": result}), 200)
  response.headers["Content-Type"] = "application/json"
  return response

@app.route('/api/rooms', methods=['POST'])
def createRoom():
  new_room = request.get_json()
  room = Rooms(
    id = new_room["id"],
    name = new_room["name"],
    description = new_room["description"],
    sensors = new_room["sensors"],
    updated_at = datetime.now()
  )
  try:
    db.session.add(room)
    db.session.commit()
    message = True
  except:
    message = False
  response = make_response( jsonify( {"message": message}), 200)
  response.headers["Content-Type"] = "application/json"
  return response

@app.route('/api/rooms/<id>', methods=['DELETE'])
def deleteRoom(id):
  Rooms.query.filter_by(id = int(id)).delete()
  db.session.commit()
  response = make_response( jsonify( {"message": True}), 200)
  response.headers["Content-Type"] = "application/json"
  return response


if __name__ == '__main__':
  app.run(debug = True, port = portHTTP, host = '0.0.0.0')