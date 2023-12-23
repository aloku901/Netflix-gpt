import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);
  const [isHoverLeft, setHoverLeft] = useState(false);
  const [isHoverRight, setHoverRight] = useState(false);

  const handleScroll = (direction) => {
    const scrollAmount = 200;
    const container = scrollRef.current;

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="pl-6 pr-2 movie-list-container relative">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>

      <div className="flex overflow-x-scroll movie-list-scroll" ref={scrollRef}>
        <div className="flex gap-3 rounded-lg">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterpath={movie?.poster_path} />
          ))}
        </div>
      </div>

      <div
        className={`absolute top-24 left-1 md:top-48 left-12 h-9 w-12 bg-gray-500 opacity-60 rounded-full flex justify-center items-center h-full text-white transition-transform duration-300 ease-in-out transform translate-x-${
          isHoverLeft ? "-2" : "0"
        } cursor-pointer`}
        onMouseEnter={() => setHoverLeft(true)}
        onMouseLeave={() => setHoverLeft(false)}
        onClick={() => handleScroll("left")}>
        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
      </div>
      <div
        className={`absolute top-24 right-1 md:top-48 right-12 h-9 w-12 bg-gray-500 opacity-60 rounded-full flex justify-center items-center h-full text-white transition-transform duration-300 ease-in-out transform translate-x-${
          isHoverRight ? "2" : "0"
        } cursor-pointer`}
        onMouseEnter={() => setHoverRight(true)}
        onMouseLeave={() => setHoverRight(false)}
        onClick={() => handleScroll("right")}>
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
      </div>
    </div>
  );
};

export default MovieList;
