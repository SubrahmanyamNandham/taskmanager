import './App.css'

import {useState} from 'react'

const App = () => {
  const [fields, setFields] = useState([
    {name: '', data: '', time: '', username: '', isEditMode: false},
  ])

  const handleChange = (index, field, value) => {
    const updatedFields = [...fields]
    updatedFields[index][field] = value
    setFields(updatedFields)
  }

  const handleAdd = () => {
    const updatedFields = [...fields]
    updatedFields.push({
      name: '',
      data: '',
      time: '',
      username: '',
      isEditMode: false,
    })
    setFields(updatedFields)
  }

  const handleEdit = index => {
    const updatedFields = [...fields]
    updatedFields[index].isEditMode = true
    setFields(updatedFields)
  }

  const handleSave = index => {
    const updatedFields = [...fields]
    updatedFields[index].isEditMode = false
    setFields(updatedFields)
  }

  const handleRemove = index => {
    const updatedFields = [...fields]
    updatedFields.splice(index, 1)
    setFields(updatedFields)
  }

  return (
    <div>
      <div className="task">
        <h1>Tasks</h1>
        <button type="button" className="plus" onClick={handleAdd}>
          +
        </button>
      </div>

      {fields.map((field, index) => (
        <div>
          {field.isEditMode ? (
            <>
              <form className="form">
                <p>Task Description</p>
                <input
                  type="text"
                  value={field.name}
                  onChange={e => handleChange(index, 'name', e.target.value)}
                  placeholder="Name"
                />
                <p>Date</p>
                <input
                  type="date"
                  value={field.data}
                  onChange={e => handleChange(index, 'data', e.target.value)}
                  placeholder="Date"
                />
                <p>time</p>
                <input
                  type="time"
                  value={field.time}
                  onChange={e => handleChange(index, 'time', e.target.value)}
                  placeholder="Time"
                />
                <p>Assign user</p>
                <input
                  type="text"
                  value={field.username}
                  onChange={e =>
                    handleChange(index, 'username', e.target.value)
                  }
                  placeholder="Username"
                />
                <button type="button" onClick={() => handleSave(index)}>
                  Save
                </button>
              </form>
            </>
          ) : (
            <>
              <form className="form">
                <p>Task Description</p>
                <input
                  type="text"
                  value={field.name}
                  onChange={e => handleChange(index, 'name', e.target.value)}
                  placeholder="Name"
                />
                <p>Date</p>
                <input
                  type="date"
                  value={field.data}
                  onChange={e => handleChange(index, 'data', e.target.value)}
                  placeholder="Date"
                />
                <p>time</p>
                <input
                  type="time"
                  value={field.time}
                  onChange={e => handleChange(index, 'time', e.target.value)}
                  placeholder="Time"
                />
                <p>Assign user</p>
                <input
                  type="text"
                  value={field.username}
                  onChange={e =>
                    handleChange(index, 'username', e.target.value)
                  }
                  placeholder="Username"
                />
                <button type="button" onClick={() => handleSave(index)}>
                  Save
                </button>
                <button type="button" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button type="button" onClick={() => handleRemove(index)}>
                  Delete
                </button>
              </form>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default App
