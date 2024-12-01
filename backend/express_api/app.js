const express = require('express');
const cors = require('cors')
const app = express();


// Enable CORS for all routes
app.use(cors());



app.use((req,res,next) => {
console.log("First middle ware")
next();
})

// app.use((req,res,next) => {
// res.send("Hello express")
// })

module.exports = app;