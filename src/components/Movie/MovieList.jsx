import React from 'react'
import './MovieItem.css'
import MovieItem from '../Movie/MovieItem'


function MovieList({movies}) {
  return (

      <section id="section-b" className="grid">
       <ul>
          {movies.map((movie) => 
          (

          <MovieItem 
          key={movie.id}
          // id={movie.id}
          Poster={movie.Poster}
          Title={movie.Title}
          Type={movie.Type}
          Year={movie.Year}
          Trailer={movie.Trailer}

          />
         
          ))}
      </ul>
      </section>
  
   
  )
}

export default MovieList;
