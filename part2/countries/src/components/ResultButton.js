import React from 'react'

const ResultButton = ({ stateChange, country }) => { 
    const showSelected = (i) => {
        stateChange([i]);
    }

    return (
        <button onClick={() => showSelected(country)}>show</button>
        )
}
 

export default ResultButton