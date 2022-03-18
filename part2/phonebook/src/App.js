import { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Results from './components/Results'


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
  const [filterResults, setFilterResults] = useState(persons)

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
      setFilterResults(persons.concat(addedName))
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
    console.log(filteredResult);
    if (el !== "") {
      setFilterResults(filteredResult)
    }else{
      setFilterResults(persons)
    }
  }


  return (
    <div>
      <Filter changeFilter={changeFilter} Filter={filter} />
      <h2>Phonebook</h2>
      <Form addNewName={addNewName} changeNameValue={changeNameValue} changeNumValue={changeNumValue} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Results filterResults={filterResults} />
    </div>
  )
}

export default App