import React from "react";
import { Link } from "react-router-dom";
function SideNavBar() {
  return (
    <div className="w-[20%] h-full border-r-[1px] border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="">SCSDB.</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300"
        >
          <i className="ri-fire-fill mr-2"></i>Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300"
        >
          <i className="ri-bard-fill mr-2"></i>Popular
        </Link>
        <Link
          to="/movies"
          className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300"
        >
          <i className="ri-movie-2-fill mr-2"></i>Movies
        </Link>
        <Link
          to="/tvshows"
          className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300"
        >
          <i className="ri-slideshow-3-fill mr-2"></i>Tv Shows
        </Link>
        <Link to="/people" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          <i className="ri-team-fill mr-2"></i>People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 mt-4" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          <i className="ri-information-2-fill mr-2"></i>About SCSDB
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          <i className="ri-customer-service-2-fill mr-2"></i>Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default SideNavBar;
