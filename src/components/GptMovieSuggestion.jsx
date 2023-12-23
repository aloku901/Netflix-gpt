import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;
  if (!movieNames) return null;
  return (
    <div className="py-4 px-8 my-10 md:my-36 bg-black text-white opacity-90">
      <div>
        {movieNames.map((movieNames, index) => (
          <MovieList key={movieNames} title={movieNames} movies={movieResults[index]} />
        ))};
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
