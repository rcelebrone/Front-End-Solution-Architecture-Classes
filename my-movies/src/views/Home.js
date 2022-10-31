import { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';
import { MoviesList } from '../components/MoviesList';
import { MoviesContainer } from "../styles/MoviesContainer";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const { data } = await MoviesService.getMovies();
        setMovies(data.results);
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return (<MoviesContainer>
        <MoviesList movies={ movies } />
    </MoviesContainer>)
}