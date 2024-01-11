export const MappingCountries = ({currentPosts}) =>{
    return  <ul className="order-countries">
    {currentPosts.map((country) => (
      <ul  className="each-country">
        <li key={country.name}>{country.name}</li>
        <li key={country.continent}>{country.continent}</li>
        <img key={country.flag} className="flag" src={country.flag}></img>
        <p>Click here to see more info</p>
      </ul>
    ))}
  </ul>
}