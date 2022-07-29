import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import SearchBox from '../Navigation/search'
import MovieList from '../Movie/MovieList'


function AllMovies() {
  const [isLoading,setIsLoading]=useState(true);
  const [loadedMovies,setLoadedMovies]=useState([]);
  
        useEffect(() => {
           setIsLoading(true)
          fetch('https://phase-2-project-599c2-default-rtdb.firebaseio.com/movies.json')

          .then(response => {
           return response.json();
          })
       
          .then(data => {

            const movies = [];

            for (const key in data){
              const movie = {
                id:key,
                ...data[key]
              };
              movies.push(movie);
            }
             setIsLoading(false);
             setLoadedMovies(movies);
          });
        },[]);

 

   if (isLoading){
    return <section>
      <p>loading......</p>
    </section>
   }
  return (
    <>
    
     <h1 style={{color:'white'}}>All Movies</h1>
     <MovieList movies={loadedMovies} />
     
</>
  )
}

export default AllMovies;
