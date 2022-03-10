import React from 'react'

const Header = ({ courseID, courseName }) => { 
    return (
        <div>
            <h1>{ courseName }</h1>
        </div>
    )
}

export default Header