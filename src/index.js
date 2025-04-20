const express = require('express');
const moon = require('nodemon')
const app = express();

//localhost:3333

app.get("/", (request, response)=>{
    return response.json({message: "Hello world!!"})
})

app.listen(3333);