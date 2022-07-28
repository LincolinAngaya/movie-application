import React from 'react'
import poster from '../Pages/landing.jpg'
import './MovieItem.css'

function MovieItem() {
  return (
    <div className='wrapper grid'>
      <div className='container'>
      {/* <div className='banner-img'>
           <img   src={poster} alt='poster' />
         </div> */}
         <div className='content'>
           <h1 className='title'> The Post</h1>
           <h1 className='year'> Action</h1>
           <h1 className='year'> 2021</h1>
           <h1 className='year'> tyler perry mike tyson, vandebeek</h1>
           <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nesciunt quibusdam voluptate, debitis rem illo similique ipsa aliquid cumque quidem suscipit quos dolores. Tenetur quam asperiores </p>
          <button className='actions'>Pick Movie</button>

          </div>
        
          </div>
          </div>
     
  )
}

export default MovieItem