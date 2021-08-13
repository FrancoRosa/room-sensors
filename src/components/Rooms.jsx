import { useStoreState } from "easy-peasy"
const Rooms = () => {
  const rooms = useStoreState(state => state.rooms)

  return (
    <div className="column">
      <div class="is-flex is-flex-wrap-wrap">
        {rooms.map(room => (
          <div className="card m-4">
            <div className="card-content">
              <p className="title is-3">{room.name} <span className='subtitle is-4'>({room.id})</span></p>
              <p className="subtitle is-5">{room.description}</p>
              <p>Sensors connected: {room.sensors}</p>
              <p>Last update: {room.last_update}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rooms