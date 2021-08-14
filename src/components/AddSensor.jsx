import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createSensor, updateRoom as updateRoomDB } from "../js/api";

const AddSensor = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [variable, setVariable] = useState('');
  const [unit, setUnit] = useState('');
  const [id, setId] = useState('');

  const { room_id } = useParams();
  const history = useHistory()

  const rooms = useStoreState(state => state.rooms)
  const updateRoom = useStoreActions(actions => actions.updateRoom)

  const handleSaveSensor = () => {
    const newSensor = {name, description, variable, unit, id}

    const currentSensors = rooms.filter(room => room.id == room_id)[0].sensors
    createSensor(room_id, newSensor).then(res => console.log('sensor created'))
    updateRoomDB(room_id, {sensors: currentSensors+1})
      .then(res => {
        updateRoom(room_id, {sensors: currentSensors+1})
        history.push(`/room/${room_id}`)
      })
  }
  
  return (
    <div className="column">
      <div className="card m-4 p-4">
        <div className="title is-3">Add Sensor</div>
        <div className="field">
          <label className="label">Name</label>
          <p className="control">
            <input 
              onChange={e => setName(e.target.value)} value={name}
              className="input" type="text" placeholder="Sensor name" />
          </p>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <p className="control">
            <textarea 
              onChange={e => setDescription(e.target.value)} value={description}
              className="textarea" type="text" placeholder="Sensor description" />
          </p>
        </div>
        <div className="field">
          <label className="label">Variable</label>
          <p className="control">
            <input 
              onChange={e => setVariable(e.target.value)} value={variable}
              className="input" type="text" placeholder="Ex: Temperature" />
          </p>
        </div>
        <div className="field">
          <label className="label">Unit</label>
          <p className="control">
            <input 
              onChange={e => setUnit(e.target.value)} value={unit}
              className="input" type="text" placeholder="Ex: ॰C" />
          </p>
        </div>
        <div className="field">
          <label className="label">Id</label>
          <p className="control">
            <input 
              onChange={e => setId(e.target.value)} value={id}
              className="input" type="number" min='1' step="1" placeholder="Unique id" />
          </p>
        </div>
        <div className="field mt-4">
          <div className="control">
            <button className="button is-primary" onClick={handleSaveSensor}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddSensor