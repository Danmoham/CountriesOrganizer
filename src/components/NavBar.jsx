//sort by section
//
import { Link } from "react-router-dom";
import { SortBy } from "./sortBy";
export const NavBar = ({
  isLoading,
  setIsLoading,
  setCountriesAll,
  setCurrentPage,
}) => {
  return (
    <nav>
      <Link to="/search">
        <button className="search-button">Search Country here</button>
      </Link>
      <SortBy
        isLoading={isLoading}
        setCurrentPage={setCurrentPage}
        setCountriesAll={setCountriesAll}
        setIsLoading={setIsLoading}
      />
    </nav>
  );
};
