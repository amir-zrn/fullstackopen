import React from 'react'

const Total = ({ courseExcs }) => { 
    var total = courseExcs.map(courseExc => courseExc.exercises)
    const sum = total.reduce((partialSum, a) => partialSum + a, 0);
    return (
        <div>
            <b>Total exercises of: {sum}</b>
            
        </div>
    )
}
 
export default Total