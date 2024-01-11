import { useState } from "react";
import { useEffect } from "react";
import { callingCountries } from "../connectingToApi";
import { MappingCountries } from "./MappingCountries";
import { Pagination } from "./Pagnation";
import { NavBar } from "./NavBar";
export const AllCountries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countriesAll, setCountriesAll] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = countriesAll.slice(firstPostIndex, lastPostIndex);
  useEffect(() => {
    callingCountries().then((data) => {
      setCountriesAll(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  } else {
    return (
      <div>
            <NavBar setCountriesAll={setCountriesAll} setIsLoading={setIsLoading}/>
            <MappingCountries currentPosts={currentPosts} />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPosts ={countriesAll.length} postsPerPage={postsPerPage}/>
      </div>
    );
  }
};
