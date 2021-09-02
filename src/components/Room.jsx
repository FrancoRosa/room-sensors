import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom"
import { deleteRoom, getSensors } from "../js/api";
import { timeFromNow, toDateTime, toTime } from "../js/helpers";

const Room = () => {
  const { room_id } = useParams();
  const history = useHistory();
  const removeRoom = useStoreActions(action => action.removeRoom)
  const setSensors = useStoreActions(action => action.setSensors)

  const rooms = useStoreState(state => state.rooms)
  const sensors = useStoreState(state => state.sensors)
  const message = useStoreState(state => state.message)
  const room = rooms.filter(room => room.id == room_id)[0] 

  const handleRoomDelete = () => {
    deleteRoom(room_id).then(res => {
      if (res.message) {
        history.push('/')
        removeRoom(room_id)
      }
    })
  }

  useEffect(() => {
    getSensors(room_id).then(res => setSensors(res.sensors) ) 
  }, [room_id])

  useEffect(() => {
    if (rooms.length==0) history.push('/')
  },[])


  useEffect(() => {
    if (message.room_id == room_id) {
      let tempSensors = sensors.map(s => s.id == message.sensor_id ? {...s, last_measurement: message.value, updated_at: message.updated_at} : s)
      setSensors(tempSensors)
    }
  }, [message])

  return (
    <div className="column">
      {rooms.length != 0 ? 
        <>
        <div className="is-flex is-justify-content-space-between">
          <p className="title is-3 mt-4 ml-2">{room.name} <span className="is-size-6 has-text-grey">({room.id})</span></p>
          <p 
            onClick={handleRoomDelete}
            className="has-text-danger p-4 m-4 title is-5">
            <FontAwesomeIcon icon={faTrash} />
          </p>
        </div>
        <p className="subtitle is-5 ml-4">Last update: {toTime(room.updated_at)}</p>
        <div class="is-flex is-flex-wrap-wrap">
          {sensors.map(sensor => (
            <div className="card m-4">
              <Link to={`/room/${room_id}/sensor/${sensor.id}`}>
                <div className="card-content">
                  <p className="title is-3">{sensor.name} <span className="is-size-6 has-text-grey">({sensor.id})</span></p>
                  <p className="subtitle is-5 m-0">{sensor.variable}</p>
                  <p className="m-0">
                    <span className="is-size-2">{sensor.last_measurement} </span>
                    <span className="is-size-4">{sensor.unit} </span>
                  </p>
                  <p className="is-size-6 has-text-grey">Last update: {toTime(sensor.updated_at)} </p>
                </div>
              </Link>
            </div>
          ))}
          <div className="card m-4">
            <Link to={`/add_sensor/${room_id}`}>
              <div className="card-content">
                <p className="title is-3">Add sensor</p>
                <p className="subtitle is-1 has-text-success">
                  <FontAwesomeIcon icon={faPlus} />
                </p>
              </div>
            </Link>
          </div>
        </div>
      </>
      : ''}
    </div>
  )
}

export default Room