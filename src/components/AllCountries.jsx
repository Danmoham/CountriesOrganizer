import { useState } from "react";
import { useEffect } from "react";
import { callingCountries } from "../connectingToApi";
import { useNavigate } from "react-router-dom";
import { MappingCountries } from "./MappingCountries";
import { Pagination } from "./Pagnation";
export const AllCountries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countriesAll, setCountriesAll] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const navigate = useNavigate();
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = countriesAll.slice(firstPostIndex, lastPostIndex);
  useEffect(() => {
    callingCountries().then((data) => {
      console.log(data);
      setCountriesAll(data);
      setIsLoading(false);
    });
  }, [isLoading]);

  if (isLoading) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  } else {
    return (
      <div>
        <div id="search-div">
          <button
            onClick={() => {
              navigate("/search");
            }}
            className="search-button"
          >
            Search Country here
          </button>
        </div>
            <MappingCountries currentPosts={currentPosts} />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPosts ={countriesAll.length} postsPerPage={postsPerPage}/>
      </div>
    );
  }
};
