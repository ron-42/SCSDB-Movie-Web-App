import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import TopNavBar from "./partials/TopNavBar";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./partials/Card";
import Loading from "./Loading";

function TvShows() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tvshows, setTvshows] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetTvShows = async () => {
    try {
      const { data } = await axios.get(`tv/${category}?page=${page}`);
      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setTvshows((prevState) => [...prevState, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    document.title = "SCSDB | TV Shows";

    setPage(1);
    setHasMore(true);
    setTvshows([]);
    GetTvShows();
  }, [category]);

  return tvshows.length > 0 ? (
    <div className="w-full">
      <div className="flex items-center justify-between px-12 py-4">
        <div className="flex items-center w-full">
          <h1 className="text-2xl text-zinc-400 font-semibold w-1/3">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line text-zinc-400 hover:text-[#6556CD] text-2xl font-semibold mr-3"
            ></i>
            TV Shows
            <small className="text-sm text-zinc-600 ml-2">({category})</small>
          </h1>
          <TopNavBar />
        </div>
        <div className="flex items-center justify-end ">
          <Dropdown
            title="Category"
            options={["popular", "top_rated", "on_the_air", "airing_today"]}
            func={(e) => setCategory(e.target.value)}
          />
          {/* <div className="w-[2%]"></div> */}
        </div>
      </div>
      <div className="w-screen overflow-x-hidden ">
        <InfiniteScroll
          dataLength={tvshows.length}
          next={GetTvShows}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
          endMessage={<p>No more results</p>}
        >
          <Card data={tvshows} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default TvShows;
