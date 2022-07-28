import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import SearchBox from '../Navigation/search'
import MovieList from '../Movie/MovieList'

function AllMovies() {
  const [isLoading, setIsLoading]=useState(true);
  const[loadedMovies,setLoadedmovies]=useState([]);

  fetch('https://phase-2-project-599c2-default-rtdb.firebaseio.com/movies.json').then(response => {
    response.json();
  })
  .then(data => {
    setIsLoading(false);
    setLoadedmovies(data)

  });
  if (isLoading){
    return(
      <section>
        <p>Loading....</p>
      </section>
    )
  }
  return (
    <>
     <SearchBox />
     <h1 style={{color:'white'}}>All Movies</h1>
     <MovieList movielist={DUMMY_DATA} />
     
</>
  )
}

export default AllMovies;
