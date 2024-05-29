import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import TopNavBar from "./partials/TopNavBar";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./partials/Card";
import Loading from "./Loading";

function Popular() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setPopular((prevState) => [...prevState, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    document.title = "SCSDB | Popular";

    setPage(1);
    setHasMore(true);
    setPopular([]); // Reset popular array when category changes
    GetPopular();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-full">
      <div className="flex items-center justify-between px-12 py-4">
        <div className="flex items-center w-3/5">
          <h1 className="text-2xl text-zinc-400 font-semibold">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line text-zinc-400 hover:text-[#6556CD] text-2xl font-semibold mr-3"
            ></i>
            Popular
          </h1>
          <TopNavBar />
        </div>
        <div className="flex items-center justify-end w-2/5">
          <Dropdown
            title="Category"
            options={["movie", "tv"]}
            func={(e) => setCategory(e.target.value)}
          />
          {/* <div className="w-[2%]"></div> */}
        </div>
      </div>
      <div className="w-screen overflow-x-hidden ">
        <InfiniteScroll
          dataLength={popular.length}
          next={GetPopular}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
          endMessage={<p>No more results</p>}
        >
          <Card data={popular} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Popular;
