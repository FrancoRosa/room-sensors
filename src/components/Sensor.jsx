import { useState } from 'react';
import { Line } from 'react-chartjs-2'
import { timeFromNow, toDateTime, toTime } from '../js/helpers';

const Sensor = () => {
  const [realtime, setRealtime] = useState(true);

  const initialData = (labels, data) => ({
    labels,
    datasets: [{
      label: 'Temperature ॰C',
      data,
      fill: false,
      borderColor: '#2ecc71',
      tension: 0.1
    }]
  });

  const options = {
    animation: {
        duration: 0
    }
  }

  const sensor = {
    name: "Location 1",
    description: "Measurements the temperature in the corner, should update every 5 min",
    last_update: 1627839691742,
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

  const labels = measurements.map(measurement => toTime(measurement.timestamp))
  
  const data = measurements.map(measurement => measurement.value)

  return (
    <div className="column">
      <p className="title is-3 mt-4 ml-2">{sensor.name}</p>
      <p className="subtitle is-5 ml-4">Last update: {timeFromNow(sensor.last_update)}</p>
      <p className="subtitle is-4 ml-3">{sensor.description}</p>
      <div className="is-flex is-justify-content-space-between">
        <button className={`button ml-4 ${realtime && 'is-success'}`}>Realtime</button>
        <div className="is-flex">
          <input type="date" className="input ml-4" />
          <input type="date" className="input ml-4" />
          <button className={`button ml-4 ${!realtime && 'is-success'}`}>Query</button>
        </div>
      </div>
      <div className="card m-4">
        <Line data={() => initialData(labels, data)} options={options}/>
      </div>
    </div>
  )
}

export default Sensor