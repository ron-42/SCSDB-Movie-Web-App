import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function HorizontalCards({ data}) {
  return (
    <div className="w-full min-h-[40vh] px-5 mb-5">
      <div className="w-full h-[40vh] flex overflow-x-auto overflow-y-hidden">
        {data.map((d, i) => (
          <div
            key={i}
            className="min-w-[15%] h-full mr-6 bg-zinc-900 mb-5 rounded-md overflow-hidden"
          >
            <img
              className="w-full h-[50%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />
            <div className="text-white p-3 h-[50%]">
              <h1 className="text-xl font-semibold mt-2">
                {d.original_title || d.name || d.title || d.original_name}
              </h1>
              <p className="mt-3 mb-3 text-sm">
                {d.overview.slice(0, 50)}...
                <span className="text-zinc-600">more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalCards;
