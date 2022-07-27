import React from 'react'
import './layout.css'
import { Link } from 'react-router-dom'

function Layout() {
  return (
    <header className='header'>
        <div className='logo'>MovieLink</div>
        <nav>
            <ul>
                <Link to='/'>Movies</Link>
                <Link to='/new-movies'>New Movies</Link>
                <Link to='/favorites'>Favoorite  Movies</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Layout