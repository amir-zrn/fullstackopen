import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filterResults, setFilterResults] = useState([])

  const changeNameValue = (event) => {
    setNewName(event.target.value)
    console.log(event.target.value);
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

  const changeFilter = (event) => {
    let el = event.target.value
    setFilter(el)
    let filteredResult = persons.filter((person) => {
      if (el === "") {
        return persons
      }
      else {
        return person.name.includes(el)
      }
    })
    setFilterResults(filteredResult)
  }


  return (
    <div>
      <div>
        search and filter results:<input onChange={changeFilter} type="search" value={filter} />
      </div>
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
        filterResults.map((person) => {
          return (
            <div key={person.id}>
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