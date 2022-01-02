
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ListOfMovies from './components/ListOfMovies';
import { moviesData } from './data';
import AddNewMovie from './components/AddNewMovie';
import { useState } from 'react';

function App() {
  const [Movies,setMovies] = useState(moviesData)
  const addingNewMovie=(x)=>{
    return setMovies([...Movies,x])
  }
  const filteringMovies=(rate,title)=>{
    return  setMovies(Movies.filter(el=>el.rate>=rate && el.title.toLowerCase().includes(title)))
  }
  return (
    <div className="App">
      <NavBar filter={filteringMovies}/> 
      <AddNewMovie fun={addingNewMovie}/>
      <ListOfMovies movies={Movies}/>
    </div>
  );
}

export default App;
