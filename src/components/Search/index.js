import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../MovieList";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("star");

  const getMovie = async (searchValue) => {
    const res = await axios.get(
      `https://omdbapi.com/?s=${searchValue}&apikey=6749c355`
    );
    const result = res.data;
    // console.log(result.Search);
    if (result.Search) {
      setMovies(result.Search);
    }
  };
  console.log(searchValue, "searchValue");
  useEffect(() => {
    getMovie(searchValue);
  }, [searchValue]);
  return (
    <>
      <section className="">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-thin">
            
            <span data-testid="movies" className="font-black mx-6">
              Movies App
            </span>
          </h1>
          <div className="relative flex mt-10 md:mt-4">
            <input
              type="text"
              placeholder="search"
              value={searchValue}
              className="px-2 py-1 rounded-l-md border-2 border-white"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              className="rounded-r-md border-2 border-zine-100 hover:border-zine-500 hover:text-zinc -500 text-zinc-100 px-2 py-1 cursor-pointer"
              // onClick={onSubmit}
            >
              Search
            </button>
          </div>
        </div>
         <MovieList movies={movies} />
      </section>
    </>
  );
};

export default Search;
