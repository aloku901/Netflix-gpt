import React, { useRef } from "react";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie Recommendation System and suggest some movie for the query" +
      searchText.current.value +
      "give me name of 20 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholey, Don etc...";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      alert("error in gptResult");
    }

    const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    const data = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResult = await Promise.all(data);
    console.log(tmdbResult);

    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults: tmdbResult}));
  };
  return (
    <div className="pt-[40%] md:pt-[15%] flex justify-center">
      <form
        className=" bg-black w-full md:w-1/2 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder="What would you like to watch today?"
        />
        <button
          className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg "
          onClick={handleGptSearchClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
