import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import TopNavBar from "./partials/TopNavBar";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./partials/Card";
import Loading from "./Loading";

function People() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetPerson = async () => {
    try {
      const { data } = await axios.get(`/person/popular?page=${page}`);
      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setPerson((prevState) => [...prevState, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useEffect(() => {
    document.title = "SCSDB | People";

    setPage(1);
    setHasMore(true);
    setPerson([]);
    GetPerson();
  }, [category]);

  return person.length > 0 ? (
    <div className="w-full">
      <div className="flex items-center justify-between px-12 py-4">
        <div className="flex items-center w-full">
          <h1 className="text-2xl text-zinc-400 font-semibold w-1/3">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line text-zinc-400 hover:text-[#6556CD] text-2xl font-semibold mr-3"
            ></i>
            People
          </h1>
          <TopNavBar />
        </div>
      </div>
      <div className="w-screen overflow-x-hidden mx-auto">
        <InfiniteScroll
          dataLength={person.length}
          next={GetPerson}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
          endMessage={<p>No more results</p>}
        >
          <Card data={person} title={category} width={16} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default People;
