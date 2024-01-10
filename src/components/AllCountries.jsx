import { useState } from "react"
import { useEffect } from "react"
import { callingCountries } from "../connectingToApi"
import { useNavigate } from "react-router-dom"
import ReactPaginate from "react-paginate"; // for pagination
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; // icons form react-icons
import { IconContext } from "react-icons"; // for customizing icons
export const AllCountries = () =>{
    const [isLoading, setIsLoading] = useState(true)
    const [countriesAll,setCountriesAll] = useState([])
    const [countriesDisplayed,setCountriesDisplayed] = useState([])
    const [page, setPage] = useState(0);
    const ItemsOnPage = 12
    const navigate = useNavigate()
    useEffect(() =>{
        callingCountries().then((data) =>{
            console.log(data)
            setCountriesAll(data)
            setCountriesDisplayed(data.filter((item, index) => {
                return (index >= page * ItemsOnPage) & (index < (page + 1) * ItemsOnPage);
              }))
            setIsLoading(false)
        })
    },[isLoading])
    if (isLoading){
        return <div><h2>Loading....</h2></div>
    }else{
    return   <div>
        <div id="search-div">
        <button onClick={() =>{
            navigate('/search')
        }} className="search-button">Search Country here</button>
        </div>
        <ul className="order-countries">
        {countriesDisplayed.map((country)=>
        <ul className="each-country">
            <li>{country.name}</li>
            <li>{country.continent}</li>
            <img className="flag" src={country.flag}></img>
            <p>Click here for more information</p>
            </ul>
        )}
        </ul>
        </div>
    }
}