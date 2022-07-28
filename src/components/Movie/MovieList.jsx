import React from 'react'
import MovieItem from './MovieItem'
import '../Movie/MovieItem.css'
function MovieList(props) {
  return (
    
        <li>
          
          {props.movielist.map((movie) => (
          <MovieItem 
          key={movie.mdbID}
          Title={movie.Poster}
          Type={movie.Type}
          Year={movie.Year}
          Trailer={movie.Trailer}

          />
          ))}
          
          </li>
   
  )
}

export default MovieList
