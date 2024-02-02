import { makeReadable } from "../functions"
import { Link } from "react-router-dom";

export const MappingCountries = ({currentPosts}) =>{
    return  <ul className="order-countries">
    {currentPosts.map((country) => (
              <Link to={`/country/${country.name}`}>

      <ul  className="each-country list-unstyled">
        <li key={country.name}><b>{country.name}</b></li>
        <li key={country.continent}><b>Continent:</b> {country.continent}</li>
        <div id="centre-div">
        <div>
        <img key={country.flag} className="flag" src={country.flag}></img>
        </div>
        </div>
        <li key={country.population}><b>Population: </b>{makeReadable(country.population)}</li>
        <p>Click here to see more info</p>

      </ul>
      </Link>

    ))}
  </ul>
}