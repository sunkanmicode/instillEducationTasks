import React from 'react'

function MovieList({movies}) {
  return (
    <div className="grid grid-cols-3 gap-4 px-100  mt-10">
      {movies.map((movie) => (
        <div className="items-center" key={movie.imdbID}>
          <div>
            <img
              src={movie.Poster}
              alt={movie.Title}
              width="100px"
              height="100px"
            />
          </div>
          <p className="w-[100px] text-center">{movie.Title}</p>
          {/* <small>{movie.Year}</small> */}
        </div>
      ))}
    </div>
  );
}

export default MovieList
