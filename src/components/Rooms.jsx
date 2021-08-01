const Rooms = () => {
  const rooms = [
    {name: "Room 1", description: "Bla bla bla", nsensors: 5, last_update: 123123, id: 0},
    {name: "Room 2", description: "Bla bla bla", nsensors: 1, last_update: 123123, id: 1},
    {name: "Room 3", description: "Bla bla bla", nsensors: 4, last_update: 123123, id: 2},
    {name: "Room 4", description: "Bla bla bla", nsensors: 1, last_update: 123123, id: 3},
  ]
  return (
    <div className="column">
      <div class="is-flex is-flex-wrap-wrap">
        {rooms.map(room => (
          <div className="card m-4">
            <div className="card-content">
              <p className="title is-3">{room.name}</p>
              <p className="subtitle is-5">{room.description}</p>
              <p>Sensors connected: {room.nsensors}</p>
              <p>Last update: {room.last_update}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rooms