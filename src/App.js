
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ListOfMovies from './components/ListOfMovies';
import { moviesData } from './data';
import AddNewMovie from './components/AddNewMovie';
import { useState } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import MovieDetails from './screens/MovieDetails';

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
      <Routes>
      <Route path="/" element={<> <AddNewMovie fun={addingNewMovie}/> <ListOfMovies movies={Movies}/> </>  }/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contact-us" element={< ContactUs/>}/>
      <Route path=":variable" element={< MovieDetails/>}/>



      

      </Routes>


      
    </div>
  );
}

export default App;
