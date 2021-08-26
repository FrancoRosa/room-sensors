import { faCog, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'
import { useHistory, useParams } from 'react-router-dom';
import { deleteSensor, getMeasurements } from '../js/api';
import { timeFromNow, toDateTime, toTime } from '../js/helpers';

const Sensor = () => {
  const [realtime, setRealtime] = useState(true);
  const {sensor_id, room_id} = useParams()
  const sensors = useStoreState(state => state.sensors)
  const message = useStoreState(state => state.message)
  const removeSensor = useStoreActions(actions => actions.removeSensor)
  const sensor = sensors.filter(sensor => sensor.id == sensor_id)[0]
  const measurements = useStoreState(state => state.measurements)
  const setMeasurements = useStoreActions(actions => actions.setMeasurements)
  const addMeasurement = useStoreActions(actions => actions.addMeasurement)
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

  const labels = measurements.map(measurement => toTime(measurement.updated_at))
  const data = measurements.map(measurement => measurement.value)

  useEffect(() => {
    if (sensors.length==0) history.push('/')
  },[])

  useEffect(() => {
    console.log('...measurements')
    getMeasurements(room_id, sensor_id).then(res => {
      console.log(res.measurements)
      setMeasurements(res.measurements)
    })
  }, [sensor_id])

  useEffect(() => {
    if (realtime) addMeasurement({...message, updated_at: Date(message.updated_at)})
  }, [message])

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
      {sensors.length != 0 ?
      <>
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
            <FontAwesomeIcon icon={faCog} spin={realtime} className="mr-2"/> 
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
      </>
      : ''}
    </div>
  )
}

export default Sensor