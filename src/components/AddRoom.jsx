const AddRoom = () => {
  
  return (
    <div className="column">
      <div className="card m-4 p-4">
        <div className="title is-3">Add room</div>
        <div className="field">
          <label className="label">Name</label>
          <p className="control">
            <input className="input" type="text" placeholder="Room name" />
          </p>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <p className="control">
            <textarea className="textarea" type="text" placeholder="Room description" />
          </p>
        </div>
        <div className="field">
          <label className="label">Id</label>
          <p className="control">
            <input className="input" type="number" min='1' step="1" placeholder="Unique id" />
          </p>
        </div>
        <div class="field mt-4">
          <div class="control">
            <button class="button is-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddRoom