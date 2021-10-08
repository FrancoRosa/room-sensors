import axios from "axios";
import io from "socket.io-client";

const host = "raspberrypi.local:9999";
// const host = "localhost:9999";

export const socket = io.connect(`http://${host}`);

export const getRooms = async () => {
  console.log("... getting rooms");
  const url = `http://${host}/api/rooms`;
  const response = await axios.get(url);
  return response.data;
};

export const createRoom = async (room) => {
  console.log("... creating room");
  const url = `http://${host}/api/rooms`;
  const response = await axios.post(url, room);
  return response.data;
};

export const deleteRoom = async (room_id) => {
  console.log("... deleting room");
  const url = `http://${host}/api/rooms/${room_id}`;
  const response = await axios.delete(url);
  return response.data;
};

export const updateRoom = async (room_id, obj) => {
  console.log("... updating room");
  const url = `http://${host}/api/rooms/${room_id}`;
  const response = await axios.put(url, obj);
  return response.data;
};

export const getSensors = async (room_id) => {
  console.log("... getting sensors");
  const url = `http://${host}/api/rooms/${room_id}/sensors`;
  const response = await axios.get(url);
  return response.data;
};

export const createSensor = async (room_id, sensor) => {
  console.log("... creating room");
  const url = `http://${host}/api/rooms/${room_id}/sensors`;
  const response = await axios.post(url, sensor);
  return response.data;
};

export const deleteSensor = async (room_id, sensor_id) => {
  console.log("... deleting sensor");
  const url = `http://${host}/api/rooms/${room_id}/sensors/${sensor_id}`;
  const response = await axios.delete(url);
  return response.data;
};

export const getMeasurements = async (room_id, sensor_id) => {
  console.log("... getting sensor values");
  const url = `http://${host}/api/rooms/${room_id}/sensors/${sensor_id}/measurements`;
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
};

export const getMeasurementsQuery = async (room_id, sensor_id, data) => {
  console.log("... getting sensor values query");
  const url = `http://${host}/api/rooms/${room_id}/sensors/${sensor_id}/measurements/query`;
  const response = await axios.post(url, data);
  return response.data;
};

export const deviceNetCard = async () => {
  console.log("... getting events");
  const url = `http://${host}/api/network/card`;
  const response = await axios.get(url);
  return response.data;
};

export const deviceNetScan = async () => {
  console.log("... getting events");
  const url = `http://${host}/api/network/scan`;
  const response = await axios.get(url);
  return response.data;
};

export const getDeviceId = async () => {
  console.log("... getting device id");
  const url = `http://${host}/api/id`;
  const response = await axios.get(url);
  return response.data;
};

export const updateNetwork = async (ssid, pass) => {
  console.log("... configure wifi");
  const url = `http://${host}/api/network`;
  const response = await axios.post(url, { ssid, pass });
  return response.data;
};

export const devicePowerOff = async () => {
  console.log("... shutting down");
  const url = `http://${host}/api/poweroff`;
  const response = await axios.post(url);
  return response.data;
};

export const deviceRestart = async () => {
  console.log("... restarting");
  const url = `http://${host}/api/restart`;
  const response = await axios.post(url);
  return response.data;
};
