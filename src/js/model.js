import { action } from "easy-peasy";

const defaults = {
  wifissid: "wifi_name",
  wifipass: "wifi_password",
};

const getSavedStorage = (key) => {
  return JSON.parse(window.localStorage.getItem(key)) || defaults[key];
};

export default {
  rooms: [],
  setRooms: action((state, rooms) => {
    state.rooms = [...rooms];
  }),
  addRoom: action((state, room) => {
    state.rooms.push(room);
  }),
  removeRoom: action((state, id) => {
    state.rooms = state.rooms.filter((room) => room.id != id);
  }),
  updateRoom: action((state, id, obj) => {
    state.rooms = state.rooms.map((room) =>
      room.id == id ? { ...room, ...obj } : room
    );
  }),

  sensors: [],
  setSensors: action((state, sensors) => {
    state.sensors = [...sensors];
  }),
  removeSensor: action((state, id) => {
    state.sensors = state.sensors.filter((sensor) => sensor.id != id);
  }),

  measurements: [],
  setMeasurements: action((state, measurements) => {
    state.measurements = [...measurements];
  }),
  addMeasurement: action((state, measurement) => {
    state.measurements.push(measurement);
  }),
  shiftMeasurement: action((state) => {
    state.measurements.shift();
  }),

  message: {},
  setMessage: action((state, message) => {
    state.message = message;
  }),

  wifipass: getSavedStorage("wifipass"),
  wifissid: getSavedStorage("wifissid"),
  setWifipass: action((state, wifipass) => {
    state.wifipass = wifipass;
  }),
  setWifissid: action((state, wifissid) => {
    state.wifissid = wifissid;
  }),
};
