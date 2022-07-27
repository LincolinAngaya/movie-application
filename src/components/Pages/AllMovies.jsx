import React from 'react'
import SearchBox from '../Navigation/search'
function AllMovies() {
  return (
    <>
     <SearchBox />
     <div className='container'>
    <div className = "movie-poster">
    <img src = '' alt = "movie poster"/>
    </div>
   <div className = "movie-info">
    <h3 className = "movie-title"></h3>
    <ul className = "movie-misc-info">
        <li className = "year">Year:2022</li>
        <li className = "rated">Ratings: PG-13</li>
        <li className = "released">Released:</li>
    </ul>
    <p className = "genre"><b>Genre:</b>Action,Adventure,Comedy </p>
    <p className = "writer"><b>Writer:</b> </p>
    <p className = "actors"><b>Actors: </b></p>
    <p className = "plot"><b>Plot:</b> </p>
    <p className = "language"><b>Language:</b>English,French,Spanish</p>
    <p className = "awards"><b><i className = "fas fa-award"></i></b> Nominated for Osacar</p>
    <button>Add to Cart</button>
</div>
</div>
</>
  )
}

export default AllMovies
