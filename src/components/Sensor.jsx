const Sensor = () => {
  const sensor = {
    name: "Location 1",
    description: "Measurements the temperature in the corner, should update every 5 min",
    last_update: 1627859791742,
    variable: 'Temperature',
    unit: '॰C',
    id: 1,
    room_id: 1,
  }

  const measurements = [
    { value: 18.19, timestamp: 1627859796566 },
    { value: 19.19, timestamp: 1627860796566 },
    { value: 20.19, timestamp: 1627867796566 },
    { value: 15.19, timestamp: 1627959796566 },
    { value: 14.19, timestamp: 1628859796566 },
  ]
  return (
    <div className="column">
      <p className="title is-3 mt-4 ml-2">{sensor.name}</p>
      <p className="subtitle is-4 ml-4">{sensor.description}</p>
      <p className="subtitle is-5 ml-4">Updated at: {sensor.last_update}</p>
      <div class="is-flex is-flex-wrap-wrap">
        <div className="card m-4">
          {measurements.map(measurement => (
            <li>{measurement.value} {measurement.timestamp}</li>  
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sensor