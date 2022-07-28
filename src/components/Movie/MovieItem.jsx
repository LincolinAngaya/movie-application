import React from 'react'
import '../Movie/MovieItem.css'


function MovieItem(props) {
  return (
    <>
      <li>
        <div className="card">
        <img src={props.Poster} alt='poster' />
      <div className="card-content">
     <h1 className='title'> Movie Title:<span>{props.Title}</span></h1>
     <h1 className='year'>Movie Type:<span> {props.Type}</span></h1>
     <h1 className='year'>Movie Year: <span>{props.Year}</span></h1>
     <h1 className='description'>Movie Trailer:<span>{props.Trailer}</span> </h1>
      <button className='action'>Pick Movie</button>
          </div>
        </div>

      </li>
    
      </>     
  )
}

export default MovieItem