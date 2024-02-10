import { Link, useParams } from "react-router-dom";
import { gettingSpecificCountry } from "../connectingToApi";
import { useEffect, useState } from "react";
import { makeReadable } from "../functions";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

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
      <div className="InputContainer">
        <span className="loader align-text"></span>
      </div>
    );
  } else {
    const population = makeReadable(myCountry.population);
    return (
      <>
        <ul key={myCountry} className="single-country">
          <h2 key={myCountry.name}>
            <b>{myCountry.name}</b>
          </h2>
          <div>
            <img
              key={myCountry.flag}
              className="single-flag"
              src={myCountry.flag}
            ></img>
          </div>

          <li key={myCountry.continent}>
            <b>Continent:</b> {myCountry.continent}
          </li>
          <li key={`population${population}`}>
            <li key={myCountry}></li>
            <b>{population} </b>
            people live here
          </li>
          <li className="languages" key={myCountry.languages}>
            <b>Language(s) spoke:</b> {myCountry.languages.join(", ")}
          </li>
          <li className="languages" key={myCountry.currencies}>
            <b>Currency(s) used:</b> {myCountry.currencies.join(", ")}
          </li>

          <li key={myCountry.capital}>
            <b>Capital: </b>
            {myCountry.capital}
          </li>
          <li key={myCountry.maps}>
            <a href={myCountry.maps} target="_blank">
              {" "}
              <b>Click here to view location on google maps</b>
            </a>
          </li>
        </ul>
        <Link to="/">
          <button className="back-button">Go back</button>
        </Link>
      </>
    );
  }
};
