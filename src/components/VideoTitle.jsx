import { faCircleExclamation, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-[100%] aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button className="bg-white text-black py-1 md:py-3 px-4 md:px-10 mt-10 md:mt-0 text-lg md:text-xl rounded-md hover:bg-opacity-80 transition-all">
        <FontAwesomeIcon icon={faPlay} />&nbsp;Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white py-3 px-10 text-xl bg-opacity-50 rounded-md hover:bg-opacity-80 transition-all">
        <FontAwesomeIcon icon={faCircleExclamation} />&nbsp; More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
