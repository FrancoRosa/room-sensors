import { action } from 'easy-peasy'

export default {
  rooms: [],
  setRooms: action((state, rooms) => {state.rooms = [...rooms]}),
  addRoom: action((state, room) => {state.rooms.push(room)}),
  removeRoom: action((state, id) => {state.rooms = state.rooms.filter(room => room.id != id)}),
  updateRoom: action((state, id, obj) => {
    state.rooms = state.rooms.map(room => room.id == id ? {...room, ...obj} : room)
  }),

  sensors: [],
  setSensors: action((state, sensors) => {state.sensors = [...sensors]}),
  removeSensor: action((state, id) => {state.sensors = state.sensors.filter(sensor => sensor.id != id)}),
  
  measurements: [],
  
}