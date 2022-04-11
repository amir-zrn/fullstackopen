import React from 'react'
import '../index.css'

const Notification = ({ messages }) => {

    if (messages === null) {
        return null
    }
    
    return (
        <div className="error-message">
            <span>{ messages }</span>
        </div>
    )
}
 

export default Notification