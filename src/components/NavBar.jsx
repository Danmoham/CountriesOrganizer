//sort by section
//
import { Link } from "react-router-dom";
import { SortBy } from "./sortBy";
export const NavBar = ({
  isLoading,
  setIsLoading,
  setCountriesAll,
  setCurrentPage, setSearchCountries
}) => {
  return (
    <nav>
      <SortBy
      setSearchCountries={setSearchCountries}
        isLoading={isLoading}
        setCurrentPage={setCurrentPage}
        setCountriesAll={setCountriesAll}
        setIsLoading={setIsLoading}
      />
    </nav>
  );
};
