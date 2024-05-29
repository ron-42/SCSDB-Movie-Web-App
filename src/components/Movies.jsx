import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import TopNavBar from "./partials/TopNavBar";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./partials/Card";
import Loading from "./Loading";

function Movies() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`movie/${category}?page=${page}`);
      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setMovie((prevState) => [...prevState, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    document.title = "SCSDB | Movies";

    setPage(1);
    setHasMore(true);
    setMovie([]);
    GetMovie();
  }, [category]);
  return movie.length > 0 ? (
    <div className="w-full">
      <div className="flex items-center justify-between px-12 py-4">
        <div className="flex items-center w-3/5">
          <h1 className="text-2xl text-zinc-400 font-semibold">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line text-zinc-400 hover:text-[#6556CD] text-2xl font-semibold mr-3"
            ></i>
            Movies<small className="text-sm text-zinc-600 ml-2">({category})</small>
          </h1>
          <TopNavBar />
        </div>
        <div className="flex items-center justify-end w-2/5">
          <Dropdown
            title="Category"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
          {/* <div className="w-[2%]"></div> */}
        </div>
      </div>
      <div className="w-screen overflow-x-hidden ">
        <InfiniteScroll
          dataLength={movie.length}
          next={GetMovie}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
          endMessage={<p>No more results</p>}
        >
          <Card data={movie} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Movies;
