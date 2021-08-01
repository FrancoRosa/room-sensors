import { 
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        Rooms
      </p>
      <ul className="menu-list">
        {rooms.map(room => (
          <li>
          <a className={room.id == selected ? 'is-active' : ''}>{room.name}</a>
          {room.id == selected ? 
            <ul>
              {sensors.map(sensor => (
                 <li><a>{sensor.name}</a></li> 
              ))}
              <li><a>
                <span className="has-text-link">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span className="ml-2">Add sensor</span>
              </a></li>
            </ul>
           : ''}
          </li>
        ))}
        <li><a>
          <span className="has-text-link">
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <span className="ml-2">Add room</span>
        </a></li>
      </ul>
    </aside>
  )
}

export default Navigator