import React from 'react'
import { useParams } from 'react-router'
import { MoviesData } from '../MoviesData'
const Trailer = () => {
    const {id}=useParams()
    const found = MoviesData.find((e)=>e.id==id)
  return (
    <div>
      <h1>{found.name}</h1>
      <img src={found.image} />
    </div>
  )
}

export default Trailer
