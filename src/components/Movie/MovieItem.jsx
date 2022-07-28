import React from 'react'
import poster from '../Pages/landing.jpg'

function MovieItem() {
  return (
    <div className='wrapper grid'>
      <div className='container'>
        <div className='banner-img'>
           <img src={poster} alt='poster' />
           <h1 className='title'> The Post</h1>
           <h1 className='year'> Action</h1>
           <h1 className='year'> 2021</h1>
             <button className='actions'>Pick Movie</button>

        </div>
      </div>
    </div>
  )
}

export default MovieItem