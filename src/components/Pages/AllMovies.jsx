import React from 'react'
import SearchBox from '../Navigation/search'
function AllMovies() {
  return (
    <>
     <SearchBox />
    <div className = "movie-poster">
    <img src = '' alt = "movie poster"/>
    </div>
   <div className = "movie-info">
    <h3 className = "movie-title"></h3>
    <ul className = "movie-misc-info">
        <li className = "year">Year: </li>
        <li className = "rated">Ratings: </li>
        <li className = "released">Released:</li>
    </ul>
    <p className = "genre"><b>Genre:</b> </p>
    <p className = "writer"><b>Writer:</b> </p>
    <p className = "actors"><b>Actors: </b></p>
    <p className = "plot"><b>Plot:</b> </p>
    <p className = "language"><b>Language:</b> \</p>
    <p className = "awards"><b><i className = "fas fa-award"></i></b> </p>
</div>
</>
  )
}

export default AllMovies
