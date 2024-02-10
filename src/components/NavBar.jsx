import { SortBy } from "./sortBy";
export const NavBar = ({
  setIsLoading,
  setCountriesAll,
  setCurrentPage, setSearchCountries
}) => {
  return (
    <nav>
      <SortBy
      setSearchCountries={setSearchCountries}
        setCurrentPage={setCurrentPage}
        setCountriesAll={setCountriesAll}
        setIsLoading={setIsLoading}
      />
    </nav>
  );
};
