import React from 'react'

const Search = ({filterNames}) => { 
    return (
        <div className="container">
            <label htmlFor="search">find countries:</label>
            <input onChange={filterNames} type="search" id="search" name="search" />
        </div>
    )
}

export default Search