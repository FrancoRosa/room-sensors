const Room = () => {
  const room = {
    name: "Room 1",
    description: "Bla bla bla",
    nsensors: 5,
    last_update: 123123,
    id: 0
  }

  const sensors = [
    {name: "Location 1", id: 0, value: 12.3, unit: '॰C', variable: 'Temperature' },
    {name: "Location 1", id: 1, value: 12.3, unit: '॰C', variable: 'Temperature' },
    {name: "Location 1", id: 2, value: 12.3, unit: '॰C', variable: 'Temperature' },
    {name: "Location 1", id: 3, value: 12.3, unit: '॰C', variable: 'Temperature' },
  ]
  return (
    <div className="column">
      <p className="title is-3 mt-4 ml-2">{room.name}</p>
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