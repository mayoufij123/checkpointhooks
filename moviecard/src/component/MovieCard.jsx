import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom'
const MovieCard = ({movie}) => {
  return (
    <div className='box' >
      <Card style={{ width: '15rem' }} className='card'>
      <Card.Img variant="top" src={movie.image} className= 'imagee' />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <Button variant="primary">{movie.date}|| {movie.type} || {movie.rating} </Button>
        <Link to={`/trailer/${movie.id}`}> <button>go to trailer
        </button></Link>
      </Card.Body>

    </Card>
      
      
    </div>
  )
}

export default MovieCard
