import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useHistory, useParams } from "react-router-dom"
import { deleteRoom } from "../js/api";

const Room = () => {
  const { id } = useParams();
  const history = useHistory();
  const removeRoom = useStoreActions(action => action.removeRoom)

  const rooms = useStoreState(state => state.rooms)
  const room = rooms.filter(room => room.id == id)[0] 

  const sensors = [
    {name: "Location 1", id: 0, value: 12.3, unit: '॰C', variable: 'Temperature' },
    {name: "Location 1", id: 1, value: 12.3, unit: '॰C', variable: 'Temperature' },
    {name: "Location 1", id: 2, value: 12.3, unit: '॰C', variable: 'Temperature' },
    {name: "Location 1", id: 3, value: 12.3, unit: '॰C', variable: 'Temperature' },
  ]

  const handleRoomDelete = () => {
    deleteRoom(id).then(res => {
      if (res.message) {
        history.push('/')
        removeRoom(id)
      }
    })
    

  }

  return (
    <div className="column">
      <div className="is-flex is-justify-content-space-between">
        <p className="title is-3 mt-4 ml-2">{room.name}</p>
        <p 
          onClick={handleRoomDelete}
          className="has-text-danger p-4 m-4 title is-5">
          <FontAwesomeIcon icon={faTrash} />
        </p>
      </div>
      <p className="subtitle is-5 ml-4">Updated at: {room.last_update}</p>
      <div class="is-flex is-flex-wrap-wrap">
        {sensors.map(sensor => (
          <div className="card m-4">
            <div className="card-content">
              <p className="title is-3">{sensor.name}</p>
              <p className="subtitle is-5">{sensor.variable}</p>
              <p>
                <span className="">{sensor.value} </span>
                <span className="">{sensor.unit} </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Room