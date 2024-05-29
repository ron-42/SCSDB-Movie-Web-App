import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNavBar from "./partials/TopNavBar";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Card from "./partials/Card";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setTrending((prevState) => [...prevState, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    document.title = "SCSDB | Trending";
    setTrending([]);
    setPage(1);
    setHasMore(true);
    GetTrending();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-full">
      <div className="flex items-center px-12 py-4">
        <div className="flex items-center w-3/5">
          <h1 className="text-2xl text-zinc-400 font-semibold">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line text-zinc-400 hover:text-[#6556CD] text-2xl font-semibold mr-3"
            ></i>
            Trending
          </h1>
          <TopNavBar />
        </div>
        <div className="flex items-center w-2/5">
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>
      <div className="w-screen overflow-x-hidden ">
        <InfiniteScroll
          dataLength={trending.length}
          next={GetTrending}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
          endMessage={<p>No more results</p>}
        >
          <Card data={trending} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

//   return <div>Hello</div>;
// }

export default Trending;
