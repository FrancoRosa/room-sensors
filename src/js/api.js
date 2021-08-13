import axios from 'axios';
// import io from "socket.io-client";

// const host='raspberrypi.local:9999'
// const host='10.84.9.68:9999'
const host='localhost:9999'
// export const socket = io.connect(`http://${host}`);

export const getRooms = async () => {
  console.log('... getting rooms');
  const url = `http://${host}/api/rooms`;
  const response = await axios.get(url)
  return response.data
}

export const createRoom = async room => {
  console.log('... creating room');
  const url = `http://${host}/api/rooms`;
  const response = await axios.post(url, room)
  return response.data
}

export const deleteRoom = async id => {
  console.log('... deleting room');
  const url = `http://${host}/api/rooms/${id}`;
  const response = await axios.delete(url)
  return response.data
}