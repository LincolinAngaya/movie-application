import React from 'react'
import poster from '../Pages/landing.jpg'
import '../Movie/MovieItem.css'


function MovieItem() {
  return (
     <section id="section-b" class="grid">
    <ul>
      <li>
        <div class="card">
        <img   src={poster} alt='poster' />
          <div class="card-content">
          <h1 className='title'> Movie Title:<span>The Post</span></h1>
     <h1 className='year'>Movie Type:<span> Action</span></h1>
     <h1 className='year'>Movie Year: <span>2021</span></h1>
     <h1 className='description'>Movie Trailer:<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nesciunt quibusdam voluptate, debitis rem illo similique ipsa aliquid cumque quidem suscipit quos dolores. Tenetur quam asperiores</span> </h1>
      <button className='action'>Pick Movie</button>
          </div>
        </div>
      </li>
    
    </ul>
   </section>
          
  )
}

export default MovieItem