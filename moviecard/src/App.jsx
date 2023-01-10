import MovieList from './component/MovieList';
import Add from './component/Add';
import SerchNav from './serch/SerchNav';
import { useState } from 'react';

import './App.css';
// import movie data
import { MoviesData } from './MoviesData';
function App() {
  const[movies,setMovies]=useState(MoviesData)
  const addmovieHandler=(newmovie)=>{
    setMovies([...movies,newmovie])

  }
  const[serchName,setSerchName]=useState('')
  return (
    <div className="App">
      <h1> movie list</h1>
      <SerchNav setSerchName={setSerchName} serchName={serchName}/>
      <Add addmovieHandler={addmovieHandler}/>
      <h3>partie Display</h3>
      <MovieList movies={movies} serchName={serchName}/>
      
     
      
    </div>
  );
}

export default App;
