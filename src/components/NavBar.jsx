//sort by section
//
import { SortBy } from "./sortBy";
export const NavBar = ({isLoading,setIsLoading,setCountriesAll,setCurrentPage}) =>{
    return <nav>
    <button
      onClick={() => {
        navigate("/search");
      }}
      className="search-button"
    >
      Search Country here
    </button>
    <SortBy isLoading={isLoading} setCurrentPage={setCurrentPage} setCountriesAll={setCountriesAll} setIsLoading={setIsLoading}/>

  </nav>
}