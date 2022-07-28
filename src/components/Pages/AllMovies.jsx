import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import SearchBox from '../Navigation/search'
import MovieList from '../Movie/MovieList'


function AllMovies() {
  const [showMovie, setShowMovie] = useState([])
  
 useEffect(() => {
  const getMovies = async () => {
    const moviesFromServer = await fetchMovies()
    setShowMovie(moviesFromServer)
  }
  
  getMovies();
  },[])

  //fetchmovies
  const fetchMovies = async () => {
    const res = await  fetch('https://phase-2-project-599c2-default-rtdb.firebaseio.com/movies.json')
   const data = await res.json()

   // console.log(data)
   return data
  }

  return (
    <>
     <SearchBox />
     <h1 style={{color:'white'}}>All Movies</h1>
     <MovieList movies={showMovie} />
     
</>
  )
}

export default AllMovies;
