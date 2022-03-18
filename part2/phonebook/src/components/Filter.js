import React from 'react'

const Filter = ({ changeFilter, filter }) => {
    return (
      <div>
      search and filter results:<input onChange={changeFilter} type="search" value={filter} />
    </div>
    )
}

export default Filter