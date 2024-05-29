import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  //   console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.6), rgba(0,0,0,.9)), url(${`https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        }`})`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[6%]"
    >
      <h1 className="w-[70%] text-5xl font-black text-white">
        {data.original_title || data.name || data.title || data.original_name}
      </h1>
      <p className="w-[70%] mt-3 text-white">
        {data.overview.slice(0, 200)}...
        <Link className="text-blue-700">more</Link>
      </p>
      <p className="text-white mt-3">
        <i className="ri-megaphone-fill text-yellow-500 mr-1"></i>
        {data.release_date ? data.release_date : `Comming Soon.`}
        {data.media_type && (
          <i className="ri-album-fill text-yellow-500 ml-5 mr-1"></i>
        )}
        {data.media_type.toUpperCase()}
      </p>
      <Link className="bg-[#6556CD] p-3 rounded-md text-white font-semibold mt-5">
        Watch Trailer
      </Link>
    </div>
  );
}

export default Header;
