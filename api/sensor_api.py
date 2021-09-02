from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from flask_socketio import SocketIO
from json import dumps
from time import time
from datetime import datetime
from models import *


portHTTP = 9999


def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db/sensors.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    return app


app = create_app()
socketio = SocketIO(app, cors_allowed_origins="*")


def broadcast(val):
    socketio.send(dumps(val), broadcast=True)


def queryRooms(limit):
    result = []
    items = Rooms.query.order_by(Rooms.updated_at.desc()).limit(limit)
    for item in items:
        dict = item.as_dict()
        result.append(dict)
    return result


def querySensors(room_id, limit):
    result = []
    items = Sensors.query.filter_by(room_id=int(room_id)).order_by(
        Sensors.updated_at.desc()).limit(limit)
    for item in items:
        dict = item.as_dict()
        result.append(dict)
    return result


def queryMeasurements(room_id, sensor_id, limit):
    result = []
    items = Measurements.query.filter_by(room_id=int(room_id), sensor_id=int(
        sensor_id)).order_by(Measurements.updated_at.asc()).limit(limit)
    for item in items:
        dict = item.as_dict()
        result.append(dict)
    return result


def queryMeasurementsByDate(room_id, sensor_id, date):
    result = []
    items = Measurements.query.filter(
        Measurements.room_id == int(room_id),
        Measurements.sensor_id == int(sensor_id),
        Measurements.updated_at.contains(date)).order_by(Measurements.updated_at)
    for item in items:
        dict = item.as_dict()
        result.append(dict)
    return result


def jsonResponse(dict):
    response = make_response(jsonify(dict), 200)
    response.headers["Content-Type"] = "application/json"
    return response


def updateSensorEntry(room_id, sensor_id, value):
    print('updating sensor entry')
    sensor = Sensors.query.filter_by(
        room_id=int(room_id), id=int(sensor_id)).first()
    if sensor:
        sensor.updated_at = datetime.utcnow()
        sensor.last_measurement = value
        db.session.commit()


def updateRoomEntry(room_id):
    print('updating sensor entry')
    room = Rooms.query.filter_by(id=int(room_id)).first()
    if room:
        room.updated_at = datetime.utcnow()
        db.session.commit()

# root


@app.route('/', methods=['GET'])
def home():
    return "... sensors server running on port %d\n" % portHTTP

# rooms


@app.route('/api/rooms', methods=['GET'])
def getRooms():
    rooms = queryRooms(100)
    return jsonResponse({"rooms": rooms})


@app.route('/api/rooms', methods=['POST'])
def createRoom():
    new_room = request.get_json()
    room = Rooms(
        id=new_room["id"],
        name=new_room["name"],
        description=new_room["description"],
        sensors=new_room["sensors"],
        updated_at=datetime.utcnow()
    )
    try:
        db.session.add(room)
        db.session.commit()
        message = True
    except:
        message = False
    return jsonResponse({"message": message})


@app.route('/api/rooms/<id>', methods=['PUT'])
def updateRoomEndPoint(id):
    data = request.get_json()
    print('data:', data)
    foundRoom = Rooms.query.filter_by(id=int(id)).first()
    try:
        for key in data:
            setattr(foundRoom, key, data[key])
        db.session.commit()
        message = True
    except:
        message = False
    return jsonResponse({"message": message})


@app.route('/api/rooms/<id>', methods=['DELETE'])
def deleteRoom(id):
    Rooms.query.filter_by(id=int(id)).delete()
    Sensors.query.filter_by(room_id=int(id)).delete()
    db.session.commit()
    return jsonResponse({"message": True})

# sensors


@app.route('/api/rooms/<room_id>/sensors', methods=['GET'])
def getSensors(room_id):
    sensors = querySensors(room_id, 100)
    return jsonResponse({"sensors": sensors})


@app.route('/api/rooms/<room_id>/sensors', methods=['POST'])
def createSensor(room_id):
    new_sensor = request.get_json()
    sensor = Sensors(
        id=new_sensor["id"],
        room_id=int(room_id),
        name=new_sensor["name"],
        variable=new_sensor["variable"],
        unit=new_sensor["unit"],
        description=new_sensor["description"],
        updated_at=datetime.utcnow()
    )
    try:
        db.session.add(sensor)
        db.session.commit()
        message = True
    except:
        message = False
    return jsonResponse({"message": message})


@app.route('/api/rooms/<room_id>/sensors/<id>', methods=['DELETE'])
def deleteSensor(id, room_id):
    Sensors.query.filter_by(id=int(id), room_id=int(room_id)).delete()
    Measurements.query.filter_by(
        sensor_id=int(id), room_id=int(room_id)).delete()
    db.session.commit()
    return jsonResponse({"message": True})

# measurements


@app.route('/api/rooms/<room_id>/sensors/<sensor_id>/measurements', methods=['GET'])
def getMeasurements(room_id, sensor_id):
    measurements = queryMeasurements(room_id, sensor_id, 288)
    return jsonResponse({"measurements": measurements})


@app.route('/api/rooms/<room_id>/sensors/<sensor_id>/measurements', methods=['POST'])
def createMeasurement(room_id, sensor_id):
    new_measurement = request.get_json()
    measurement = Measurements(
        room_id=int(room_id),
        sensor_id=int(sensor_id),
        value=new_measurement["value"],
        updated_at=datetime.utcnow()
    )
    try:
        db.session.add(measurement)
        updateSensorEntry(room_id, sensor_id, new_measurement["value"])
        updateRoomEntry(room_id)
        db.session.commit()
        message = True
    except:
        message = False
    return jsonResponse({"message": message})


@app.route('/api/echo/rooms/<room_id>/sensors/<sensor_id>/measurements', methods=['POST'])
def createMeasurementEcho(room_id, sensor_id):
    new_measurement = request.get_json()
    measurement = Measurements(
        room_id=int(room_id),
        sensor_id=int(sensor_id),
        value=new_measurement["value"],
        updated_at=datetime.utcnow()
    )

    try:
        db.session.add(measurement)
        updateSensorEntry(room_id, sensor_id, new_measurement["value"])
        updateRoomEntry(room_id)
        broadcast({**measurement.as_dict(), 'updated_at': int(time())})
        message = True
    except:
        message = False
    return jsonResponse({"message": message})


@app.route('/api/rooms/<room_id>/sensors/<sensor_id>/measurements/query', methods=['POST'])
def queryMeasurement(room_id, sensor_id):
    query = request.get_json()
    measurements = queryMeasurementsByDate(room_id, sensor_id, query['date'])
    return jsonResponse({"measurements": measurements})


if __name__ == '__main__':
    app.run(debug=False, port=portHTTP, host='0.0.0.0')
