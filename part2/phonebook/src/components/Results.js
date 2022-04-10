import React from 'react'

const Results = ({ filterResults, deleteButton }) => { 
    return (
        
        filterResults.map((result) => {
            return (
            <div key={result.id}>
              <span> {result.name} </span>
                <span> {result.number} </span>
                <button id={result.id} onClick={deleteButton}>delete</button>
              <br />
            </div>
            )
          })
    )
}
 
export default Results