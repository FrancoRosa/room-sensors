import { action } from 'easy-peasy'

export default {
  rooms: [],
  sensors: [],
  measurements: [],

  setRooms: action((state, rooms) => {state.rooms = [...rooms]}),
  addRoom: action((state, room) => {state.rooms.push(room)}),
  removeRoom: action((state, id) => {state.rooms = state.rooms.filter(room => room.id != id)}),
}