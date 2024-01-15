import { Link, useParams } from "react-router-dom";
import { gettingSpecificCountry } from "../connectingToApi";
import { useEffect, useState } from "react";

export const SingleCountry = () => {
  const [myCountry, setMyCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { my_country } = useParams();

  useEffect(() => {
    gettingSpecificCountry(my_country).then((data) => {
      setMyCountry(data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  } else {
  }
  return (
    <ul className="single-country">
      <li key={myCountry.name}>
        <b>{myCountry.name}</b>
      </li>
      <li key={myCountry.continent}><b>Continent:</b> {myCountry.continent}</li>
      <li key={`population${myCountry.population}`}>
        <b>Population: </b>{myCountry.population}
      </li>
      <li key={myCountry.capital}><b>Capital: </b>{myCountry.capital}</li>
      <li key={myCountry.maps}><b>Map location </b>{myCountry.maps}</li>
      <div>
        <img key={myCountry.flag} className="flag" src={myCountry.flag}></img>
      </div>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </ul>
  );
};
