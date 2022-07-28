import React from 'react'
import {useRef} from 'react'
import './addNewForm.css'
function AddNewMovieForm() {
    const imageInputRef = useRef();
    const titleInputRef = useRef();
    const typeInputRef = useRef();
    const yearInputRef = useRef();
    const trailerInputRef = useRef();
   

    function submitHandler(e){
           e.preventDefault();

            const enteredImage = imageInputRef.current.value;
            const enteredTitle = titleInputRef.current.value;
            const enteredType = typeInputRef.current.value;
            const enteredYear = yearInputRef.current.value;
            const enteredTrailer = trailerInputRef.current.value;
         
    }
  return (
    <div classname='Card'>
    <form className='form' onSubmit={submitHandler}>
    <div className='control'>
            <label htmlFor='image'>Movie Image</label>
            <input type="url"  required id="image" ref={imageInputRef} />
        </div>
    <div className='control'>
            <label htmlFor='title'>Movie Title</label>
            <input type="text"  required id="title" ref={titleInputRef}/>
        </div>
        <div className='control'>
            <label htmlFor='type'>Movie Type</label>
            <input type="text"  required id="type" ref={typeInputRef}/>
        </div>
        <div className='control'>
            <label htmlFor='year'>Movie Year</label>
            <input type="text"  required id="year" ref={yearInputRef}/>
        </div>
        <div className='control'>
            <label htmlFor='description'>Movie Trailer</label>
            <textarea id="description" required rows='5'ref={trailerInputRef} />
        </div>
        <div className='actions'>
            <button>Add Meetup</button>
        </div>
    </form>
  </div>
  )
}

export default AddNewMovieForm