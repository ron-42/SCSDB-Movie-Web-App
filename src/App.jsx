import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import LocomotiveScroll from "locomotive-scroll";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import People from "./components/People";

const scroll = new LocomotiveScroll();

function App() {
  return (
    <div className="bg-[#1F1E24] w-[100vw] h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </div>
  );
}

export default App;
