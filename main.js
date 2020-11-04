const express = require('express')
const handlebars = require('express-handlebars')

const fortuneCookies = require ('./fortune-cookie')

const app = express()
const PORT = 3000

app.get('/',
    (req,resp)=>{
        resp.status(200)
        // the key is the accept
        resp.format(
            {
            'text/html' : () =>{
                resp.send(`<h3>${fortuneCookies()}<h3>`)
            },
            'text/plain' : () =>{
                resp.send(fortuneCookies())
            },
            'application/json' : () =>{
                const text = fortuneCookies()
                resp.json(
                    {
                        cookieText: text,
                        generatedOn: (new Date()).toDateString()
                    }
                )
                
                },
                'default':()=>{
                    resp.status(406)
                    resp.type('text/plain')
                    resp.send(`Not supported: ${req.get('Accept')}`)
                }
        
        
    }
)})

// start express
app.listen(
    PORT,       //port number   
    function() { //callback, execute after express has started
        console.info(`Application started on port ${PORT} at ${new Date()}`)
            })