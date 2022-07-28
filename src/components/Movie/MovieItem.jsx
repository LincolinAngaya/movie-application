import React from 'react'
import poster from '../Pages/landing.jpg'
import './MovieItem.css'

function MovieItem() {
  return (
    <>
    {/* <div className='wrapper grid'>
      <div className='container'>
        <div className='banner-img'>
           <img   src={poster} alt='poster' />
       </div>
       <div className='content'>
           <h1 className='title'> Movie Title:<span>The Post</span></h1>
           <h1 className='year'>Movie Type:<span> Action</span></h1>
           <h1 className='year'>Movie Year: <span>2021</span></h1>
           <h1 className='year'> Movie Producers:<span>tyler perry mike tyson, vandebeek</span></h1>
           <h1 className='description'>Movie Trailr:<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nesciunt quibusdam voluptate, debitis rem illo similique ipsa aliquid cumque quidem suscipit quos dolores. Tenetur quam asperiores</span> </h1>
          <button className='actions'>Pick Movie</button>
        </div>
        </div>
       </div>

<div className='wrapper grid'>
<div className='container'>
  <div className='banner-img'>
     <img   src={poster} alt='poster' />
 </div>
 <div className='content'>
     <h1 className='title'> Movie Title:<span>The Post</span></h1>
     <h1 className='year'>Movie Type:<span> Action</span></h1>
     <h1 className='year'>Movie Year: <span>2021</span></h1>
     <h1 className='year'> Movie Producers:<span>tyler perry mike tyson, vandebeek</span></h1>
     <h1 className='description'>Movie Trailr:<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nesciunt quibusdam voluptate, debitis rem illo similique ipsa aliquid cumque quidem suscipit quos dolores. Tenetur quam asperiores</span> </h1>
    <button className='actions'>Pick Movie</button>
  </div>
  </div>
 </div>


<div className='wrapper grid'>
<div className='container'>
  <div className='banner-img'>
     <img   src={poster} alt='poster' />
 </div>
 <div className='content'>
     <h1 className='title'> Movie Title:<span>The Post</span></h1>
     <h1 className='year'>Movie Type:<span> Action</span></h1>
     <h1 className='year'>Movie Year: <span>2021</span></h1>
     <h1 className='year'> Movie Producers:<span>tyler perry mike tyson, vandebeek</span></h1>
     <h1 className='description'>Movie Trailr:<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nesciunt quibusdam voluptate, debitis rem illo similique ipsa aliquid cumque quidem suscipit quos dolores. Tenetur quam asperiores</span> </h1>
    <button className='actions'>Pick Movie</button>
  </div>
  </div>
 </div>

<div className='wrapper grid'>
<div className='container'>
  <div className='banner-img'>
     <img   src={poster} alt='poster' />
 </div>
 <div className='content'>
     <h1 className='title'> Movie Title:<span>The Post</span></h1>
     <h1 className='year'>Movie Type:<span> Action</span></h1>
     <h1 className='year'>Movie Year: <span>2021</span></h1>
     <h1 className='year'> Movie Producers:<span>tyler perry mike tyson, vandebeek</span></h1>
     
    
  </div>
  </div>
 </div> */}
        <section id="section-b" class="grid">
    <ul>
      <li>
        <div class="card">
        <img   src={poster} alt='poster' />
          <div class="card-content">
          <h1 className='title'> Movie Title:<span>The Post</span></h1>
     <h1 className='year'>Movie Type:<span> Action</span></h1>
     <h1 className='year'>Movie Year: <span>2021</span></h1>
     <p className='description'>Movie Trailr:<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nesciunt quibusdam voluptate, debitis rem illo similique ipsa aliquid cumque quidem suscipit quos dolores. Tenetur quam asperiores</span> </p>
     <button className='actions'>Pick Movie</button>
          </div>
        </div>
      </li>
      
     
     
    </ul>
   </section>
         
 </>
         
     
  )
}

export default MovieItem