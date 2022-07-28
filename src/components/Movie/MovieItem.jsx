import React from 'react'
import poster from '../Pages/landing.jpg'
import '../Movie/MovieItem.css'


function MovieItem(props) {
  return (
    <section id="section-b" className="grid">
    <ul>
      
        <div className="card">
        <img   src={props.poster} alt='poster' />
          <div className="card-content">
          <h1 className='title'> Movie Title:<span>{props.Title}</span></h1>
     <h1 className='year'>Movie Type:<span> {props.Type}</span></h1>
     <h1 className='year'>Movie Year: <span>{props.Year}</span></h1>
     <h1 className='description'>Movie Trailer:<span>{props.Trailer}</span> </h1>
      <button className='action'>Pick Movie</button>
          </div>
        </div>

      
      </ul>
      </section>
          
  )
}

export default MovieItem