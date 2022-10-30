import axios from "axios";

const API_KEY = "683007c83fb44d6206edc8da83b8890a"
const BASE_URL = "https://api.themoviedb.org/3/"

const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl("movie/popular"));
    }
}