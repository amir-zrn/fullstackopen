import React from 'react'

const Results = ({ filterResults }) => { 
    return (
        
        filterResults.map((result) => {
            return (
            <div key={result.id}>
              <span> {result.name} </span>
                <span> {result.number} </span>
              <br />
            </div>
            )
          })
    )
}
 
export default Results