import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Weather = ({ country }) => {
    const [temp, setTemp] = useState()
    const [wind, setWind] = useState()

    useEffect(() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
          .then(response => {
              setTemp(response.data.main['temp'])
              setWind(response.data.wind['speed'])
        })
    }, []
    )


    return (
        <div className='weather-info'>
            <h2>weather in {country.capital}</h2>
            <span>temprature is {temp} Celcius</span><br />
            <span>wind is {wind} m/s </span>
        </div>
    )
}
 

export default Weather