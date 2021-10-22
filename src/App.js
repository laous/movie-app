import { useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import Search from './components/Search';

import { data } from "./data";

function App() {
  const  [input ,setInput] = useState("")
  
  const [movies, setMovies] = useState(data.movies.slice(0, data.movies.length));
  
  const getMovies = (input) => {
    if (input !== "") {
      setMovies(
        data.movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(input.toLowerCase())
          )
          .slice(0, 10)
      );
    } else {
      setMovies(data.movies.slice(0, data.movies.length));
    }
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
    getMovies(e.target.value)
  }

  console.log(input)
  return (
    <div className="App">

      <Header />
      <Search onInputChange={handleInputChange} value={input}/>
      <CardList  list={movies}/>
      
    </div>
  );
}

export default App;
