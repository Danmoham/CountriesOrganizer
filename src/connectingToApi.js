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

export const callingCountriesFromContinent = (continent) =>{
    const myCountries = []
    return axios.get(`https://restcountries.com/v3.1/region/${continent}`).then(({data}) =>{
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

}
export const gettingSpecificCountry = (country) =>{
    return axios.get(`https://restcountries.com/v3.1/name/${country}`).then(({data}) =>{
    data = data[0]
    const myCountry = {name: data.name.common,population: data.population, capital: data.capital, continent: data.region, flag: data.flags.png}
    console.log(data)
    console.log(myCountry.name)
    console.log(myCountry)
    return myCountry
    }).catch((error) =>{
        console.log(error)
        return error
    })
    //name of country
    //population, 
    //capital
    //continent
    //flag
    // Google maps of location
    //potentially Languages

}
gettingSpecificCountry("Ethiopia")
