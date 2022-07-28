import React from 'react'
import { useHistory } from 'react-router-dom';
import AddNewMovieForm from '../form/AddNewMovieForm'
function NewMovies() {

  const history = useHistory();

  function addMovieHandler(movieDetails){
       fetch('https://phase-2-project-599c2-default-rtdb.firebaseio.com/movies.json',
       {
        method:'POST',
        body:JSON.stringify(movieDetails),
        headers:{
               'Content-Type':'application/json'
        }
       }
       ).then(() => {
         history.replace('/');
       });
  }
  return (
    <section>
    <h1 style={{color:'white'}}>Add New Movie</h1>
    <AddNewMovieForm  onAddMovie={addMovieHandler}/>
    </section>
  )
}

export default NewMovies