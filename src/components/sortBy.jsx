import {
  callingCountriesFromContinent,
  callingCountries,
} from "../connectingToApi";
import { useEffect, useState } from "react";

export const SortBy = ({setSearchCountries ,isLoading,setCurrentPage, setCountriesAll, setIsLoading }) => {
  const [currentContinent, setCurrentContinent] = useState("All");
  const handlingChange = (event) => {
    event.preventDefault();
    if (
      event.target.value === "All" ||
      event.target.value === "Choose Continent"
    ) {
      setIsLoading(true);
      setCurrentPage(1);
      setCurrentContinent("All")
      setIsLoading(false)
    } else {
      setIsLoading(true);
      setCurrentPage(1);
      setCurrentContinent(event.target.value)
      setIsLoading(false)
        // The callback function will be executed after the state is updated
 
  };
}
  useEffect(() => {
    if (currentContinent === "All" || currentContinent === "Choose Continent") {
      callingCountries().then((data) => {
        setCountriesAll(data)
        setSearchCountries(data)
        setIsLoading(false);
      });
    } else {
      callingCountriesFromContinent(currentContinent).then((data) => {
        setCountriesAll(data)
        setSearchCountries(data)
        setIsLoading(false);
      });
    }

  }, [currentContinent, isLoading, setCurrentPage, setCountriesAll]);
 
  return (
    <div className="sorting-continent">
      <p className="align-text">
        <b>Filter by Specific continent</b>
      </p>
      <select className="selecting-continent" value={currentContinent} onChange={handlingChange}>
        <option>Choose Continent</option>
        <option>All</option>
        <option>Europe</option>
        <option>South America</option>
        <option>North America</option>
        <option>Africa</option>
        <option>Oceania</option>
        <option>Asia</option>
      </select>
    </div>
  );
};
