import { useParams } from "react-router-dom";
import { gettingSpecificCountry } from "../connectingToApi";
import { useEffect, useState } from "react";

export const SingleCountry = () => {
  const [myCountry, setMyCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { my_country } = useParams();

  useEffect(() => {
    console.log(my_country);
    gettingSpecificCountry(my_country).then(({ data }) => {
      console.log(data);
      setMyCountry(data);
    });
  }, []);
  return (
    <div>
      <li key={myCountry.name}>
        <b>{myCountry.name}</b>
      </li>
      <li key={myCountry.continent}>Continent: {myCountry.continent}</li>
      <img key={myCountry.flag} className="flag" src={myCountry.flag}></img>
      <p>Click here to see more info</p>
    </div>
  );
};
