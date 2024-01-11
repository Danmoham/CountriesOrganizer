import { useParams } from "react-router-dom"

export const SingleCountry = () =>{
    let { my_country } = useParams();
    return <p>{my_country}</p>

}