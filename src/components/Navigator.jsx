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
    <aside className="menu column is-one-fifth p-4 is-size-5">
      <p className="menu-label has-text-link ml-2">
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
      <ul className="menu-list p-0 m-0">
        {rooms.map((room) => (
          <li>
            <Link
              to={`/room/${room.id}`}
              onClick={() => {
                setSelectedSensor(null);
                if (selectedRoom == room.id) {
                  setSelectedRoom(null);
                } else {
                  setSelectedRoom(room.id);
                }
              }}
              className={room.id == selectedRoom ? "is-active" : ""}
            >
              {room.name}
            </Link>
            {room.id == selectedRoom ? (
              <ul className="p-0 m-0">
                {sensors.map((sensor) => (
                  <li className="p-0 m-0">
                    <Link
                      to={`/room/${room.id}/sensor/${sensor.id}`}
                      onClick={() => setSelectedSensor(sensor.id)}
                      className={
                        sensor.id == selectedSensor
                          ? "p-0 m-0 is-active"
                          : "p-0 m-0"
                      }
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
                    <span className="ml-2 is-size-6">Add sensor</span>
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
