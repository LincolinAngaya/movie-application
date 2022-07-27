import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
  return (
    <header>
        <div>MovieLink</div>
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