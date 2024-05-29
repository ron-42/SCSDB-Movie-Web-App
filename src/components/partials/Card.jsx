// Card.jsx
import React from "react";
import { Link } from "react-router-dom";

function Card({ data, title, width }) {
  return (
    <div className="flex flex-wrap px-12 py-6 bg-[#1F1E24] ">
      {data.map((c, i) => (
        <Link
          key={i}
          to={`/${title}/${c.id}`}
          className={`${
            width ? `w-[${width}%]` : "w-[30%]"
          } mx-[1.5%] mb-[5%] relative`}
        >
          <img
            className="w-full h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-md"
            src={`https://image.tmdb.org/t/p/original/${
              c.backdrop_path || c.poster_path || c.profile_path
            }`}
            alt=""
          />
          <h1 className="text-xl text-zinc-200 mt-3 font-semibold">
            {c.original_title || c.name || c.title || c.original_name}
          </h1>
          {c.vote_average && (
            <div className="absolute right-[-5%] top-[-5%] text-white text-xl font-semibold w-[6vh] h-[6vh] flex items-center justify-center rounded-full bg-yellow-500">
              {(c.vote_average * 10).toFixed()} <sup className="text-xs">%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Card;
