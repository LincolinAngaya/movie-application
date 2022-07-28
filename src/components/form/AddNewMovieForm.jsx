import React from 'react'
import {useRef} from 'react'
import './addNewForm.css'
function AddNewMovieForm() {
    function submitHandler(e){
           e.preventDefault();


    }
  return (
    <div classname='Card'>
    <form className='form' onSubmit={submitHandler}>
    <div className='control'>
            <label htmlFor='image'>Movie Image</label>
            <input type="url"  required id="image" onChange={}/>
        </div>
    <div className='control'>
            <label htmlFor='title'>Movie Title</label>
            <input type="text"  required id="title"/>
        </div>
        <div className='control'>
            <label htmlFor='type'>Movie Type</label>
            <input type="text"  required id="type"/>
        </div>
        <div className='control'>
            <label htmlFor='year'>Movie Year</label>
            <input type="text"  required id="year"/>
        </div>
        <div className='control'>
            <label htmlFor='description'>Movie Trailer</label>
            <textarea id="description" required rows='5' />
        </div>
        <div className='actions'>
            <button>Add Meetup</button>
        </div>
    </form>
  </div>
  )
}

export default AddNewMovieForm