import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noImage from "../../../public/no-image-available.png";

function TopNavBar() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center pl-[25%]">
      <i className="ri-search-2-line text-3xl text-zinc-400"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 p-4 text-xl outline-none border-none bg-transparent text-zinc-200"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-fill text-3xl ml-24 text-zinc-400"
        ></i>
      )}

      <div className="absolute w-[48%] max-h-[50vh] bg-zinc-200 top-[90%] left-[32%] overflow-auto rounded">
        {searches.map((s, i) => (
          <Link
            key={i}
            className="w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100 text-zinc-600 font-semibold hover:text-black hover:bg-zinc-300 duration-300"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noImage
              }
              alt=""
            />
            <span>
              {s.original_title || s.name || s.title || s.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopNavBar;
