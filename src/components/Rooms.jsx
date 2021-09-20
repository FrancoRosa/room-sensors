import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";
import { toDateTime } from "../js/helpers";
const Rooms = () => {
  const rooms = useStoreState((state) => state.rooms);

  return (
    <div className="column content">
      <h1 className="title is-3 m-4">Rooms</h1>
      <div class="is-flex is-flex-wrap-wrap">
        {rooms.map((room) => (
          <div className="card m-4">
            <Link to={`/room/${room.id}`}>
              <div className="card-content">
                <p className="title is-3">
                  {room.name} <span className="subtitle is-4">({room.id})</span>
                </p>
                <p className="subtitle is-5">{room.description}</p>
                <p>Sensors connected: {room.sensors}</p>
                <p>Last update: {toDateTime(room.updated_at)}</p>
              </div>
            </Link>
          </div>
        ))}
        <div className="card m-4">
          <Link to="/add_room">
            <div className="card-content">
              <p className="title is-3">Add room</p>
              <p className="subtitle is-1 has-text-success">
                <FontAwesomeIcon icon={faPlus} />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
