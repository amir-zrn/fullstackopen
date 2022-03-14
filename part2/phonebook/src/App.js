import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const changeValue = (event) => {
    setNewName(event.target.value)
  }

  const addNewName = (event) => {
    event.preventDefault()
    const addedName = {
      name: newName
    }
    setPersons(persons.concat(addedName))
    setNewName("")
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={changeValue} value={newName} />
        </div>
        <div>
          <button onClick={addNewName} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person) => {
          return (
            <div key={person.name}>
              {person.name}
            <br />
            </div>
          )
        })
      }
      <br />
    </div>
  )
}

export default App