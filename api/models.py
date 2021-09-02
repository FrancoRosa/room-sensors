from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Rooms(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)  # Name or exitbutton
    description = db.Column(db.String(400))  # Name or exitbutton
    sensors = db.Column(db.Integer)
    updated_at = db.Column(db.DateTime)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


class Sensors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_id = db.Column(db.Integer)
    name = db.Column(db.String(100))  # Name or exitbutton
    variable = db.Column(db.String(100))  # Name or exitbutton
    unit = db.Column(db.String(20))  # Name or exitbutton
    description = db.Column(db.String(400))  # Name or exitbutton
    last_measurement = db.Column(db.Float)
    updated_at = db.Column(db.DateTime)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


class Measurements(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_id = db.Column(db.Integer)
    sensor_id = db.Column(db.Integer)
    value = db.Column(db.Float)
    updated_at = db.Column(db.DateTime)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
