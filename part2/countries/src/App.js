import {useState , useEffect} from 'react'
import axios from 'axios'
import Search from './components/Search'
import Results from './components/Results'

function App() {
  const [countries, setCountries] = useState([])
  const [countriesNames, setCountriesNames] = useState([])
  const [filteredData, setFilteredData] = useState([])
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data)
        const names = []
        response.data.map((country, index) => {
          const obj = {
            id: index,
            name: country.name.common
          }
          names.push(obj)
        })
        setCountriesNames(names)
        setFilteredData(names)
    })
  }, [])

  const filterNames = (event) => {
    const filteredResults = countriesNames.filter(country => {
      return country.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    })
    setFilteredData(filteredResults)
  }

    return (
      <div className="App">
        <Search filterNames={filterNames} />
        <Results countries={countries} filteredData={filteredData} />
    </div>
    )
}

export default App;
