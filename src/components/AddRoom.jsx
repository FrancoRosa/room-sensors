import { useStoreActions } from "easy-peasy"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { createRoom } from "../js/api"

const AddRoom = () => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [id, setId] = useState('')
  const addRoom = useStoreActions(actions => actions.addRoom)

  const handleSave = () => {
    const sensors = 0
    createRoom({name, description, id, sensors})
      .then(res => {if(res.message) {
        history.push('/')
        addRoom({name, description, id, sensors})
    }} )
  }

  return (
    <div className="column">
      <div className="card m-4 p-4">
        <div className="title is-3">Add room</div>
        <div className="field">
          <label className="label">Name</label>
          <p className="control">
            <input 
              value={name} onChange={e => setName(e.target.value)}
              className="input" type="text" placeholder="Room name" />
          </p>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <p className="control">
            <textarea 
              value={description} onChange={e => setDescription(e.target.value)}
              className="textarea" type="text" placeholder="Room description" />
          </p>
        </div>
        <div className="field">
          <label className="label">Id</label>
          <p className="control">
            <input 
              value={id} onChange={e => setId(e.target.value)}
              className="input" type="number" min='1' step="1" placeholder="Unique id" />
          </p>
        </div>
        <div className="field mt-4">
          <div className="control">
            <button className="button is-primary" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddRoom