import React from 'react'
import SearchBox from '../Navigation/search'
import poster from '../Pages/landing.jpg'
import MovieList from '../Movie/MovieList'

const DUMMY_DATA=[{
  Title: "Thor",
  Year: 2011,
  imdbID: "tt0800369",
  Type: "movie",
  Poster: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
}, 
{
  Title: "Thor: Ragnarok",
  Year: 2017,
  imdbI: "tt3501632",
  Type: "movie",
  Poster: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg"
},
];
function AllMovies() {
  return (
    <>
     <SearchBox />
     <h1 style={{color:'white'}}>All Movies</h1>
     <MovieList />
     <ul>
   {DUMMY_DATA.map((movie) =>{
    return <li key={movie.imdbID}>{movie.Title}</li>
   })}
   </ul>
</>
  )
}

export default AllMovies
