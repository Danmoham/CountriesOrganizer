import { useState } from "react";
import { useEffect } from "react";
import { callingCountries } from "../connectingToApi";
import { MappingCountries } from "./MappingCountries";
import { Pagination } from "./Pagnation";
import { NavBar } from "./NavBar";
export const AllCountries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countriesAll, setCountriesAll] = useState([]);
  const [searchCountries,setSearchCountries] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = searchCountries.slice(firstPostIndex, lastPostIndex);
  useEffect(() => {
    callingCountries().then((data) => {
      setSearchCountries(data)
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
    function searchingItems(event){
      event.preventDefault()
      const mySearchTerm = event.target.value
      if (mySearchTerm.length > 2){
        const mySearchedCountries = countriesAll.filter((country) =>{
          return country.name.includes(mySearchTerm)
        })
        setSearchCountries(mySearchedCountries)
        setCurrentPage(1)
      }else{
        setSearchCountries(countriesAll)

      }
    }
    return (
      <div>
        <NavBar
          isLoading={isLoading}
          setCurrentPage={setCurrentPage}
          setCountriesAll={setCountriesAll}
          setSearchCountries={setSearchCountries}
          setIsLoading={setIsLoading}
        />
        <div>
        <label><b>Type Country here: </b></label>
        <input onChange={searchingItems} placeholder="Country Name">
        </input>
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
