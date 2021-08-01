const AddRooms = () => {
  
  return (
    <div className="column">
      <div className="card m-4">
        <div className="card-image">
          <img src="http://imageipsum.com/300x300" alt="" srcset="" />
        </div> 
        <div className="card-content">
          <p className="title is-3">{room.name}</p>
          <p className="subtitle is-5">{room.description}</p>
          <p>Sensors connected: {room.nsensors}</p>
          <p>Last update: {room.last_update}</p>
        </div>
      </div>
    </div>
  )
}

export default AddRooms