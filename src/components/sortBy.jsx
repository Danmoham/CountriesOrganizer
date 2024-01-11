import { callingCountriesFromContinent,callingCountries } from "../connectingToApi"
import { useState } from "react"

export const SortBy = ({setCountriesAll,setIsLoading}) =>{
    const [currentContinent,setCurrentContinent] = useState("All")
    const handlingChange = (event) =>{
        event.preventDefault()
        console.log(event.target.value)
        if (event.target.value === "All"){
            //set isLoading True here
            setIsLoading(true)
            callingCountries().then((data) =>{
                console.log(data)
                setCountriesAll(data)
                setIsLoading(false)
            })
        }else{
            //set isLoading True here
            setIsLoading(true)
            setCurrentContinent(event.target.value)
            callingCountriesFromContinent(event.target.value).then((data) =>{
                console.log(data)
                setCountriesAll(data)
                setIsLoading(false)
            })
        }
    }
    return <div>
        <p><b>Search by Specific continent</b></p>
        <select value={currentContinent} onChange={handlingChange} >
            <option>All</option>
            <option>Europe</option>
            <option>South America</option>
            <option>North America</option>
            <option>Africa</option>
            <option>Oceania</option>
            <option>Asia</option>
        </select>
    </div>
}