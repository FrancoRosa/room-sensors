import { 
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navigator = () => {
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

  const selected = 2;
  
  return (
    <aside className="menu column is-one-fifth m-4">
      <p className="menu-label has-text-link">
        <Link to='/rooms'>
          Rooms
        </Link>
      </p>
      <ul className="menu-list">
        {rooms.map(room => (
          <li>
          <Link to='/room' className={room.id == selected ? 'is-active' : ''}>{room.name}</Link>
          {room.id == selected ? 
            <ul>
              {sensors.map(sensor => (
                <li>
                  <Link to='/sensor'>
                    {sensor.name}
                  </Link>
                </li> 
              ))}
              <li>
                <Link to='/add_sensor'>
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
          <Link to='/add_room'>
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