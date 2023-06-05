import React, { useEffect, useState } from "react";

const API_URL = 'https://www.omdbapi.com?apikey=bb968a5d';

const App = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        if (data.Response === "True") {
            setMovies(data.Search);
        } else {
            setMovies([]);
        }
    };

    useEffect(() => {
        searchMovies('hello');
    }, []);

    return (
        <div>
            <h1>APP</h1>
            {movies.map((movie) => (
                <div key={movie.imdbID}>
                    <h2>{movie.Title}</h2>
                    <p>Year: {movie.Year}</p>
                    <p>Type: {movie.Type}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            ))}
        </div>
    );
};

export default App;
