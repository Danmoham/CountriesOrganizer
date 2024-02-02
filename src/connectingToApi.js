import axios from "axios"

export const callingCountries = (country) =>{
    const myCountries = []
    if (!country){
    return axios.get(`https://restcountries.com/v3.1/all`).then(({data}) =>{
    data.forEach(country => {
        myCountries.push ({name: country.name.common,population : country.population, capital : country.capital, continent: country.continents[0], flag: country.flags.png})
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
        myCountries.push ({name: country.name.common,population : country.population, capital : country.capital, continent: country.continents[0], flag: country.flags.png})
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
            myCountries.push ({name: country.name.common,population : country.population, capital : country.capital, continent: country.continents[0], flag: country.flags.png})
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
    return axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`    ).then(({data}) =>{
        data = data[0]
    const myLanguages = []
    let myCurrencies = data.currencies
    const currencies = []
    // for each object within the object get the name property
    for (let key in data.languages){
        myLanguages.push(data.languages[key])
    }
    for (let key in myCurrencies){
        currencies.push(myCurrencies[key].name)
    }
    const myCountry = {currencies : currencies, languages: myLanguages, name: data.name.common,population: data.population, capital: data.capital, continent: data.continents[0], flag: data.flags.png, maps :data.maps.googleMaps}
    return myCountry
    }).catch((error) =>{
        console.log(error)
        return error
    })

}
gettingSpecificCountry("andorra")
