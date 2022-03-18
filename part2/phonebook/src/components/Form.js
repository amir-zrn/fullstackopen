import React from 'react'

const Form = ({ changeNameValue, newName, changeNumValue, newNumber, addNewName }) => {
    return (
    <form>
        <div>
          <div>name: <input onChange={changeNameValue} value={newName} /></div>
          <div>number: <input onChange={changeNumValue} value={newNumber} /></div>
        </div>
        <div>
          <button onClick={addNewName} type="submit">add</button>
        </div>
    </form>
    )
}

export default Form