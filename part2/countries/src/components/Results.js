import React from 'react'
import axios from "axios"
import ResultButton from './ResultButton'


const Results = ({ filteredData, countries, stateChange }) => {

    if (filteredData.length === 1) {
        const country = filteredData[0]
        const resultCountry = countries[country.id]
        console.log(resultCountry);
        const languages = Object.keys(resultCountry.languages).map((key, i) => {
            return(
                <li key={i}>
                    {resultCountry.languages[key]}
                </li>
            )
        })
        return (
            <div className="item">
                <div className='result-country'>
                    <h1 className="name">{country.name}</h1>
                    <span className='capital'>{resultCountry.capital}</span>
                    <br />
                    <br />
                    <span className="area">{resultCountry.area}</span>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2 className="languages">Languages</h2>
                    <ul>{languages}</ul>
                    <div>{ resultCountry.flag }</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="items">
                {filteredData.map(country => {
                    return (
                        <div key={country.id} style={{ display: "inline-block",  marginRight: "5px", width: "100%"}} >
                            <li style={{ display: "inline-block",  marginRight: "5px"}}>{country.name}</li>
                            <ResultButton stateChange={stateChange} country={country} />
                        </div>
                    )
                })}
            </div>
        )
    }
}
 
export default Results