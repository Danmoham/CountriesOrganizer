import { useState } from "react";
import { useEffect } from "react";
import { callingCountries } from "../connectingToApi";
import { MappingCountries } from "./MappingCountries";
import { Pagination } from "./Pagnation";
import { NavBar } from "./NavBar";
export const AllCountries = () => {
  function searchingItems(event) {
    event.preventDefault();
    const mySearchTerm = event.target.value.toLowerCase();
    if (mySearchTerm.length > 2) {
      const mySearchedCountries = countriesAll.filter((country) => {
        return country.name.toLowerCase().includes(mySearchTerm);
      });
      setSearchCountries(mySearchedCountries);
      setCurrentPage(1);
    } else {
      setSearchCountries(countriesAll);
    }
  }
  const [isLoading, setIsLoading] = useState(true);
  const [countriesAll, setCountriesAll] = useState([]);
  const [searchCountries, setSearchCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = searchCountries.slice(firstPostIndex, lastPostIndex);
  useEffect(() => {
    callingCountries().then((data) => {
      setSearchCountries(data);
      setCountriesAll(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="InputContainer">
        <span className="loader align-text"></span>
      </div>
    );
  } else {
    return (
      <div>
        <div className="NavBar">
          <div>
            <div className="InputContainer">
              <input
                className="search-input"
                onChange={searchingItems}
                placeholder="Search Country Here...."
              ></input>
            </div>
          </div>
          <NavBar
            setCurrentPage={setCurrentPage}
            setCountriesAll={setCountriesAll}
            setSearchCountries={setSearchCountries}
            setIsLoading={setIsLoading}
          />
        </div>
        <MappingCountries currentPosts={currentPosts} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPosts={searchCountries.length}
          postsPerPage={postsPerPage}
        />
      </div>
    );
  }
};
