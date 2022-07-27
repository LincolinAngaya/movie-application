import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header className='header'>
        <div className='logo'>Movie <span>Link</span></div>
        <nav>
            <ul>
               <li><Link to='/'>Movies</Link></li> 
               <li> <Link to='/new-movies'>New-Movies</Link></li>
               <li> <Link to='/favorites'>Favorite-Movies</Link></li>
            </ul>
        </nav>
    </header>
    
  )
}

export default NavBar