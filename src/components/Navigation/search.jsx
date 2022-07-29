import React from 'react'
import { useState } from 'react'
import './nav.css'
function SearchBox() {
  const [query, setQuery]=useState('');

  const search = (data) =>{
    return data.filter((movie) => movie.Title.toLowerCase().include(query));
  }
  return (
    <div className='search-container'>
    <div className="search-element">
        <input type="text" 
         className="form-control"
         onChange={(e) => setQuery(e.target.value)} 
         />
    </div>
</div>
  )
}

export default SearchBox;