import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import Form from './components/Form'
import Results from './components/Results'

import personService from './services/persons'



const App = () => {
  const [persons, setPersons] = useState([])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filterResults, setFilterResults] = useState(persons)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
        setFilterResults(response)
      })
  }, [])


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
      if (window.confirm(`${addedName.name} is already added to phonebook, replace the old number with a new one?`)) {
      
        const newPhone = persons.find(person => person.name === addedName.name)
        const changedPhone = { ...newPhone, number: newNumber }
        personService.update(newPhone.id, changedPhone)
        
        
        setPersons(persons.map(person => person.name === addedName.name ? addedName : person))
        setFilterResults(persons.map(person => person.name === addedName.name ? addedName : person))
      }
    } else {
      setPersons(persons.concat(addedName))
      setFilterResults(persons.concat(addedName))
      
      personService
        .create(
          addedName
      )
      setNewName("")
      setNewNumber("")
    }
  }

  const deleteButton = (id) => {
    if (window.confirm("really dude?")) {
      personService
        .deleteItem(id.target.id);
    }
    personService
      .getAll()
      .then(data => {
      setPersons(data)
      setFilterResults(data)
    })
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
      <Results deleteButton={deleteButton} filterResults={filterResults} />
    </div>
  )
}

export default App