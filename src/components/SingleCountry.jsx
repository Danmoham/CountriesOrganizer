import { Link, useParams } from "react-router-dom";
import { gettingSpecificCountry } from "../connectingToApi";
import { useEffect, useState } from "react";
import { makeReadable } from "../functions"
import { GoogleMap, LoadScript } from '@react-google-maps/api';


export const SingleCountry = () => {
  const [myCountry, setMyCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { my_country } = useParams();

  const center = {
    lat: -34.397,
    lng: 150.644,
  };
  
  const containerStyle = {
    width: '70%',
    height: '400px',
  };

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
  const population = makeReadable(myCountry.population)
  return (
    <ul className="single-country">
      <li key={myCountry.name}>
        <b>{myCountry.name}</b>
      </li>
      <li key={myCountry.continent}><b>Continent:</b> {myCountry.continent}</li>
      <li key={`population${population}`}>
        <b>Population: </b>{population}
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
}
