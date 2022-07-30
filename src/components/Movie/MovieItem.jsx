import React from 'react'
import '../Movie/MovieItem.css'
import {useState} from 'react'


function MovieItem(props) {
  const [show, setShow]=useState(false)
  
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
      <button className='action' onClick={() => setShow(!show)}>{show ? 'Pick Movie' : 'unpick Movie'}</button>
          </div>
        </div>

      </li>
    
      </>     
  )
}

export default MovieItem