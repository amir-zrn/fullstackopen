import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Results from './components/Results'
import axios from "axios"


const App = () => {
  const [persons, setPersons] = useState([])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filterResults, setFilterResults] = useState(persons)

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        setFilterResults(response.data)
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
      alert(`${addedName.name} is already added to phonebook`)
    } else {
      setPersons(persons.concat(addedName))
      setFilterResults(persons.concat(addedName))
      axios
        .post(
          'http://localhost:3001/persons', addedName
      )
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