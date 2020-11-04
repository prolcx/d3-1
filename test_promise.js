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

const p =fetch(url)
p.then(result=>{
    return result.json()
})
.then(result=>{
    console.info('The weather')
    console.info(result)
})
.catch(e=>{
    console.info('Is an error')
    console.error('error: ', e) 
})
/*
p
.then(result=>{
    console.info('Promise resolved')
    console.info('result: ', result)
    const p =result.json()
    p.then(data=>{
        console.info('the weather')
        console.info(data)
    }).catch(e=>{
        console.info('Is an error')
        console.error('error: ', e)
    })
})
.catch(err=>{
    console.info('Promise rejected')
    console.error('error: ', err)
})

*/

//fetch(ENDPOINT)