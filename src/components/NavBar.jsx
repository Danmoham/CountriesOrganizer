//sort by section
//
import { SortBy } from "./sortBy";
export const NavBar = ({setIsLoading,setCountriesAll}) =>{
    return <nav>
    <button
      onClick={() => {
        navigate("/search");
      }}
      className="search-button"
    >
      Search Country here
    </button>
    <SortBy setCountriesAll={setCountriesAll} setIsLoading={setIsLoading}/>

  </nav>
}