import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header className='header'>
        <div className='logo'>MovieLink</div>
        <nav>
            <ul>
                <Link to='/'>Movies</Link>
                <Link to='/new-movies'>New-Movies</Link>
                <Link to='/favorites'>Favoorite-Movies</Link>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar