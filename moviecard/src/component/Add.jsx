import React from 'react'
import { useState } from 'react'

const Add = ({addmovieHandler}) => {
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [type,setType]=useState('')
    const [ date,setDate]=useState('')
    const [image,setImage]=useState('')
    const [rating,setRating]=('')
const Add=()=>{
    addmovieHandler({
        name:name,
        date:date,
        description:description,
        rating:rating,
        type:type,
        image:image,
        isDone:false
    })
}
  
    return (
    <div>
        <h3>partie Add</h3>
        <br />
        <button onClick={()=>Add()}> Add movie</button>
        <br />
        <input placeholder='put the movie name' value={name} onChange={(e)=>setName(e.target.name)}/>
        <input placeholder='description movie' value={description} onChange={(e)=>setDescription(e.target.description)}/>
        <input placeholder='date movie' value={date}onChange={(e)=>setDate(e.target.date)}/>
        <input placeholder='image' value={image} onChange={(e)=>setImage(e.target.image)}/>
        <input placeholder='rating movie' value={rating} onChange={(e)=>setRating(e.target.rating)} />
        <input placeholder='type movie' value={type} onChange={(e)=>setType(e.target.type)}/>
    
    </div>
  )
    }

export default Add
