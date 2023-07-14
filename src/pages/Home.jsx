import React, { useEffect, useState } from 'react'
import "../App.css";
import axios from "axios";
import "../index.css";
import MovieGrid from '../components/MovieGrid';


const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('https://swapi.dev/api/films/');
      console.log(response.data.results);
      setMovies(response.data.results);
    };
    console.log(movies);
  
    fetchMovies();
  }, []);
  return (
    <div> 
    <div className="starter">
      <h1>The Star Wars Hexing</h1>
      <p className="text starter">
        This website is dedicated to Star Wars movies. You can click on the
        movies to see the content
      </p>
    </div>
 <MovieGrid />
 </div>
  )
}

export default Home