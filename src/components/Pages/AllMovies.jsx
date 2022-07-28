import React from 'react'
import {useState} from 'react'
import SearchBox from '../Navigation/search'
import MovieList from '../Movie/MovieList'

const DUMMY_DATA =[{
  Title: "Thor",
  Year: 2011,
  id: 1,
  Type: "movie",
  Poster: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  Trailer:"It a country that is being suspected to be corrupt and private institution sending Mallek for probe"
}, 
{
  Title: "Thor: Ragnarok",
  Year: 2017,
  id: 2,
  Type: "movie",
  Poster: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg",
  Trailer:"It a country that is being suspected to be corrupt and private institution sending Mallek for probe"
},
{
  Title: "Thor: Ragnarok",
  Year: 2017,
  id: 3,
  Type: "movie",
  Poster: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg",
  Trailer:"It a country that is being suspected to be corrupt and private institution sending Mallek for probe"
},
];
function AllMovies() {
  const [isLOading, setIsLoading]=useState(false)

  fetch('https://phase-2-project-599c2-default-rtdb.firebaseio.com/movies.json').then(response => {
    response.json();
  }).then(data => {

  })
  return (
    <>
     <SearchBox />
     <h1 style={{color:'white'}}>All Movies</h1>
     <MovieList movielist={DUMMY_DATA} />
     
</>
  )
}

export default AllMovies;
