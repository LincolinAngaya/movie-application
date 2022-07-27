import React from 'react'
import './layout.css'
import NavBar from '../Navigation/NavBar'
import SearchBox from '../Navigation/search'


function Layout() {
  return (
    <div className='wrapper'>
        <NavBar />
        <SearchBox />

    </div>
    
  )
}

export default Layout