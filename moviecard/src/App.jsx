import MovieList from './component/MovieList';
import Add from './component/Add';
import SerchNav from './serch/SerchNav';
import { useState } from 'react';
import { Routes,Route } from 'react-router';
import Navbar from './component/Navbar';
import Trailer from './component/Trailer';
import './App.css';
// import movie data
import { MoviesData } from './MoviesData';
function App() {
  const[movies,setMovies]=useState(MoviesData)
  const addmovieHandler=(newmovie)=>{
    setMovies([...movies,newmovie])}
  const[serchName,setSerchName]=useState('')
  return (
    <div className="App">
      <Navbar/>
      <h1> movie list</h1>

      <SerchNav setSerchName={setSerchName} serchName={serchName}/>
      <Add addmovieHandler={addmovieHandler}/>
      <h3>partie Display</h3>
      <Routes>
      <Route path='/MovieList' element={<MovieList movies={movies} serchName={serchName}/>}/>
      <Route path='/trailer/:id' element={<Trailer/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
