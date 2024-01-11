import { makeReadable } from "../functions"
import { Link } from "react-router-dom";

export const MappingCountries = ({currentPosts}) =>{
    return  <ul className="order-countries">
    {currentPosts.map((country) => (
              <Link to={`/country/${country.name}`}>

      <ul  className="each-country">
        <li key={country.name}><b>{country.name}</b></li>
        <li key={country.continent}>Continent: {country.continent}</li>
        <img key={country.flag} className="flag" src={country.flag}></img>
        <li key={country.population}>Population: {makeReadable(country.population)}</li>
        <p>Click here to see more info</p>

      </ul>
      </Link>

    ))}
  </ul>
}