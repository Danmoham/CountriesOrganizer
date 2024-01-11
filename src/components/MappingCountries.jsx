export const MappingCountries = ({currentPosts}) =>{
    return  <ul className="order-countries">
    {currentPosts.map((country) => (
      <ul className="each-country">
        <li>{country.name}</li>
        <li>{country.continent}</li>
        <img className="flag" src={country.flag}></img>
        <p>Click here for more information</p>
      </ul>
    ))}
  </ul>
}