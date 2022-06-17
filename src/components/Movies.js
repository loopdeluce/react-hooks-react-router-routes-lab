import React from "react";
import { movies } from "../data";

function Movies() {
  const movieElements = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h3>{movie.title}</h3>
        <h4>{movie.time}</h4>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      {movieElements}
    </div>
  );
}

export default Movies;
