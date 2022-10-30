import { useEffect, useState } from 'react';
import './App.css';
import { Header } from "./components/Header";
import { MoviesList } from './components/MoviesList';
import { MoviesService } from './services/MoviesService';
import { MoviesContainer } from "./styles/MoviesContainer";

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const { data } = await MoviesService.getMovies();
    setMovies(data.results);
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div className="App">

      <Header />

      <MoviesContainer>
        <MoviesList movies={ movies } />
      </MoviesContainer>
    </div>
  );
}

export default App;