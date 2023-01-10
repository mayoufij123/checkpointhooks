import React from 'react'




const MovieCard = ({movie}) => {
  return (
    <div className='box' >
      
      <img src={movie.image} alt="image"  className=' image'/>
      <h1>{movie.name}</h1>
      <h2>{movie.type} ||{movie.rating}|| {movie.date}</h2>
      <h2>{movie.description}</h2>

      
    </div>
  )
}

export default MovieCard
