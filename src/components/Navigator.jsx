import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigator = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedSensor, setSelectedSensor] = useState(null);
  
  const rooms = [
    {name: "Room 1", description: "Blan bla bla", nsensors: 5, last_update: 123123, id: 0},
    {name: "Room 2", description: "Blan bla bla", nsensors: 1, last_update: 123123, id: 1},
    {name: "Room 3", description: "Blan bla bla", nsensors: 4, last_update: 123123, id: 2},
    {name: "Room 4", description: "Blan bla bla", nsensors: 1, last_update: 123123, id: 3},
  ]

  const sensors = [
    {name: "Location 1", id: 0},
    {name: "Location 2", id: 1},
    {name: "Location 3", id: 2},
    {name: "Location 4", id: 3},
    {name: "Location 5", id: 4},
  ]

  
  return (
    <aside className="menu column is-one-fifth m-4">
      <p className="menu-label has-text-link">
        <Link to='/rooms' onClick={() => {setSelectedRoom(null); setSelectedSensor(null)}}>
          Rooms
        </Link>
      </p>
      <ul className="menu-list">
        {rooms.map(room => (
          <li>
          <Link 
            to='/room' 
            onClick={() => {setSelectedRoom(room.id); setSelectedSensor(null)}} 
            className={room.id == selectedRoom ? 'is-active' : ''}>
            {room.name}
          </Link>
          {room.id == selectedRoom ? 
            <ul>
              {sensors.map(sensor => (
                <li>
                  <Link to='/sensor'
                    onClick={() => setSelectedSensor(sensor.id)} 
                    className={sensor.id == selectedSensor ? 'is-active' : ''}>
                    {sensor.name}
                  </Link>
                </li> 
              ))}
              <li>
                <Link 
                  onClick={() => setSelectedSensor(null)} 
                  to='/add_sensor'>
                  <span className="has-text-link">
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                  <span className="ml-2">Add sensor</span>
                </Link>
              </li>
            </ul>
           : ''}
          </li>
        ))}
        <li>
          <Link to='/add_room' onClick={() => setSelectedRoom(null)}>
            <span className="has-text-link">
              <FontAwesomeIcon icon={faPlus} />
             </span>
            <span className="ml-2">Add room</span>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Navigator