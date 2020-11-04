//load fetch with query

const fetch = require('node-fetch')
const withQuery = require('with-query').default

//load api data
const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=f6ab2bf45ff775761d7047c829993701'
const API_KEY = process.env.API_KEY || ""


const url = withQuery(
    ENDPOINT,
    {
        q:'singapore',
        appid: API_KEY
    }
)
console.info('url= ',url.toString())

const getWeather = async function(city, apiKey) {
    const url = withQuery(
        ENDPOINT,
        {
            q: city,
            appid: apiKey
        }
    )
    //then(result =>{})
    const result = await fetch(url)
    //then(result =>{})
    try {
        const weather = await result.json()
    } catch(e) {
        console.error(`ERROR:`,e)
        return Promise.reject(e)
    }

    return Promise.resolve(weather)
}

//returns a promise
try {
getWeather('singapore', API_KEY)
    .then(weather=>{
        console.info('the weather: ', weather)
    })
} catch(e) {
    
}