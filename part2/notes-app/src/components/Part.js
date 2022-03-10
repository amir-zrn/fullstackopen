import React from 'react'

const Part = ({content}) => {
    return (
        <div>
            <span style={{marginRight: 10}}>{content.name}</span>
            <span>{content.exercises}</span>
            <br />
            <br />
        </div>
    )
}
 
export default Part