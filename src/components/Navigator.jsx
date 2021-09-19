import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRooms, socket } from "../js/api";
import { useStoreState, useStoreActions } from "easy-peasy";
import Clock from "./Clock";

const Navigator = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedSensor, setSelectedSensor] = useState(null);
  const rooms = useStoreState((state) => state.rooms);
  const sensors = useStoreState((state) => state.sensors);
  const message = useStoreState((state) => state.message);
  const setRooms = useStoreActions((actions) => actions.setRooms);
  const setMessage = useStoreActions((actions) => actions.setMessage);

  useEffect(() => {
    getRooms().then((res) => setRooms(res.rooms));
    socket.on("message", (msg) => {
      setMessage(JSON.parse(msg));
      console.log(JSON.parse(msg));
    });
    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <aside className="menu column is-one-fifth p-0 ml-4 mt-4 is-size-5">
      <Clock />
      <p className="menu-label has-text-link">
        <Link
          to="/rooms"
          onClick={() => {
            setSelectedRoom(null);
            setSelectedSensor(null);
          }}
        >
          Rooms
        </Link>
      </p>
      <ul className="menu-list">
        {rooms.map((room) => (
          <li>
            <Link
              to={`/room/${room.id}`}
              onClick={() => {
                setSelectedRoom(room.id);
                setSelectedSensor(null);
              }}
              className={room.id == selectedRoom ? "is-active" : ""}
            >
              {room.name}
            </Link>
            {room.id == selectedRoom ? (
              <ul>
                {sensors.map((sensor) => (
                  <li>
                    <Link
                      to={`/room/${room.id}/sensor/${sensor.id}`}
                      onClick={() => setSelectedSensor(sensor.id)}
                      className={sensor.id == selectedSensor ? "is-active" : ""}
                    >
                      {sensor.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    onClick={() => setSelectedSensor(null)}
                    to={`/add_sensor/${room.id}`}
                  >
                    <span className="has-text-link">
                      <FontAwesomeIcon icon={faPlus} />
                    </span>
                    <span className="ml-2">Add sensor</span>
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}
          </li>
        ))}
        <li>
          <Link to="/add_room" onClick={() => setSelectedRoom(null)}>
            <span className="has-text-link">
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span className="ml-2">Add room</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Navigator;
