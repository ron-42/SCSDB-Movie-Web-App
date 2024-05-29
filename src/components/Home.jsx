import React, { useEffect, useState } from "react";
import SideNavBar from "./partials/SideNavBar";
import TopNavBar from "./partials/TopNavBar";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";

function Home() {
  document.title = "SCSDB | Homepage";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      //   console.log(data.results.l);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomdata);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
      //   console.log(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  //   console.log(trending);
  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  //   console.log(wallpaper);
  return wallpaper && trending ? (
    <>
      <SideNavBar />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <TopNavBar />
        <Header data={wallpaper} />
        <div className="flex justify-between p-5">
          <h1 className="text-3xl text-zinc-300 font-semibold">Trending</h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
