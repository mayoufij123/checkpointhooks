import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({movies,serchName}) => {
  return (
    <div className='movieList-container' >
      {movies.filter((e)=>e.name.includes(serchName.toLowerCase().trim()))
      .map((el) =>   <MovieCard  movie={el}  />)}
        
      
    </div>
  )
}

export default MovieList
