import React from 'react'
import Part from './Part'

const Content = ({ courseParts }) => { 
    return (
        <div>
            {courseParts.map((coursePart) => {
                return (<Part key={coursePart.id} content={coursePart} />)
            })}
        </div>
    )
}
 
export default Content