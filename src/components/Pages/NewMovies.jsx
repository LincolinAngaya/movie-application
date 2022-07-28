import React from 'react'
import AddNewMovieForm from '../form/AddNewMovieForm'
function NewMovies() {
  
  function addMovieHandler(movieDetails){
       fetch('https://phase-2-project-599c2-default-rtdb.firebaseio.com/')
  }
  return (
    <section>
    <h1>Add New Movie</h1>
    <AddNewMovieForm  onAddMovie={addMovieHandler}/>
    </section>
  )
}

export default NewMovies