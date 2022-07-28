import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import SearchBox from '../Navigation/search'
import MovieList from '../Movie/MovieList'


function AllMovies() {
  const [IsLoading,setIsLoading]=useState(true);
  const [loadedMovies,setLoadedMovies]=useState([]);
  
        useEffect(() => {
     
        },[])

   fetch('https://phase-2-project-599c2-default-rtdb.firebaseio.com/movies.json')

   .then(response => {
    return response.json();
   })

   .then(data => {
      setIsLoading(false);
      setIsLoading(data);
   });

   if (IsLoading){
    return <section>
      <p>loading...</p>
    </section>
   }
  return (
    <>
     <SearchBox />
     <h1 style={{color:'white'}}>All Movies</h1>
     <MovieList movies={loadedMovies} />
     
</>
  )
}

export default AllMovies;
