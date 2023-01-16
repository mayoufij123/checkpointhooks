import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router'
import { MoviesData } from '../MoviesData'

const Trailer = () => {
    const {id}=useParams()
    const found = MoviesData.find((e)=>e.id==id)
  return (
    <div>
      <Card style={{ width: '15rem' }} className='card'>
      <Card.Img variant="top" src={found.image} className= 'imagee' />
      <Card.Body>
        <Card.Title>{found.name}</Card.Title>
        <Card.Text>
          {found.description}
        </Card.Text>
        <Button variant="primary">{found.date}|| {found.type} || {found.rating} </Button>
        
      </Card.Body>

    </Card>

    </div>
  )
}

export default Trailer
