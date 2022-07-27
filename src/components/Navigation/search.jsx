import React from 'react'
import './nav.css'
function SearchBox() {
  return (
    <div className='search-container'>
    <div className="search-element">
        <h3>Search Movie:</h3>
        <input type="text" className="form-control" />
    </div>
</div>
  )
}

export default SearchBox;