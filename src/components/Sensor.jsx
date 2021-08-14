import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useState } from 'react';
import { Line } from 'react-chartjs-2'
import { useHistory, useParams } from 'react-router-dom';
import { deleteSensor } from '../js/api';
import { timeFromNow, toDateTime, toTime } from '../js/helpers';

const Sensor = () => {
  const [realtime, setRealtime] = useState(true);
  const {sensor_id, room_id} = useParams()
  const sensors = useStoreState(state => state.sensors)
  const removeSensor = useStoreActions(actions => actions.removeSensor)
  const sensor = sensors.filter(sensor => sensor.id == sensor_id)[0]
  const history = useHistory()

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

  const measurements = [
    { value: 18.19, timestamp: 1627859796566 },
    { value: 19.19, timestamp: 1627860796566 },
    { value: 20.19, timestamp: 1627867796566 },
    { value: 15.19, timestamp: 1627959796566 },
    { value: 14.19, timestamp: 1628859796566 },
  ]

  const labels = measurements.map(measurement => toTime(measurement.timestamp))
  const data = measurements.map(measurement => measurement.value)

  const handleSensorDelete = () => {
    deleteSensor(room_id, sensor_id).then(res => {
      if (res.message) {
        history.push(`/room/${room_id}`)
        removeSensor(sensor_id)
      }
    }) 
  }

  return (
    <div className="column">
      <div className="is-flex is-justify-content-space-between">
        <p className="title is-3 mt-4 ml-2">{sensor.name}</p>
        <p 
          onClick={handleSensorDelete}
          className="has-text-danger p-4 m-4 title is-5">
          <FontAwesomeIcon icon={faTrash} />
        </p>
      </div>
      <p className="subtitle is-5 ml-3">Last update: {timeFromNow(sensor.last_update)}</p>
      <p className="subtitle is-5 ml-3">{sensor.description}</p>
      <div className="card m-4">
        <Line data={() => initialData(labels, data)} options={options}/>
      </div>
      <div className="is-flex is-justify-content-space-between">
        <button
          onClick={() => setRealtime(true)}
          className={`button is-outlined ml-4 ${realtime && 'is-success'}`}>
            Realtime
        </button>
        <div className="is-flex">
          <label class="label ml-4">From:</label>
          <input type="date" className={`input ml-2 ${!realtime && 'is-success'}`} />
          <label class="label ml-4">To:</label>
          <input type="date" className={`input ml-2 ${!realtime && 'is-success'}`} />
          <button 
            onClick={() => setRealtime(false)}
            className={`button is-outlined ml-4 mr-4 ${!realtime && 'is-success'}`}>
              Query
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sensor