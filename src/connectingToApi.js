import axios from "axios"

export const callingCountries = (country) =>{
    const myCountries = []
    if (!country){
    return axios.get(`https://restcountries.com/v3.1/all`).then(({data}) =>{
    data.forEach(country => {
        myCountries.push ({name: country.name.common,population : country.population, capital : country.capital, continent: country.region, flag: country.flags.png})
    })
    return myCountries
    }).catch(({response}) =>{
        const myResponse = {
            status : response.status,
            message: response.data.message
        }
        return myResponse
    })
}else{
    return axios.get(`https://restcountries.com/v3.1/name/${country}`).then(({data}) =>{
    data.forEach(country => {
        myCountries.push ({name: country.name.common,population : country.population, capital : country.capital, continent: country.region, flag: country.flags.png})
    })
    }).then(() =>{
        return myCountries
    }).catch(({response}) =>{
        const myResponse = {
            status : response.status,
            message: response.data.message
        }
        return myResponse
    })

}
}

