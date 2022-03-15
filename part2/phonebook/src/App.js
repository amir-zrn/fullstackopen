import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const changeNameValue = (event) => {
    setNewName(event.target.value)
  }
  
  const changeNumValue = (event) => {
    setNewNumber(event.target.value)
  }

  const addNewName = (event) => {
    event.preventDefault()
    const addedName = {
      name: newName,
      number: newNumber
    }
    if (persons.filter(person => person.name === addedName.name).length > 0) {
      alert(`${addedName.name} is already added to phonebook`)
    } else {
      setPersons(persons.concat(addedName))
      setNewName("")
      setNewNumber("")
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          <div>name: <input onChange={changeNameValue} value={newName} /></div>
          <div>number: <input onChange={changeNumValue} value={newNumber} /></div>
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
              <span> {person.name} </span>
              <span> {person.number} </span>
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