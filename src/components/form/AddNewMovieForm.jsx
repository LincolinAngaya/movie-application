import React from 'react'
import './addNewForm.css'
function AddNewMovieForm() {
  return (
    <div classname='Card'>
    <form className='form'>
    <div className='control'>
            <label htmlFor='title'>Movie Number</label>
            <input type="text"  required id="title"/>
        </div>
        <div className='control'>
            <label htmlFor='title'>Movie Title</label>
            <input type="text"  required id="title"/>
        </div>
        <div className='control'>
            <label htmlFor='title'>Movie Type</label>
            <input type="text"  required id="title"/>
        </div>
        <div className='control'>
            <label htmlFor='title'>Movie Year</label>
            <input type="text"  required id="title"/>
        </div>

        <div className='control'>
            <label htmlFor='image'>Movie Image</label>
            <input type="url"  required id="image"/>
        </div>

        
 
        <div className='actions'>
            <button>Add Movie</button>
        </div>


    </form>
  </div>
  )
}

export default AddNewMovieForm