const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app =  express()
const router = require('./routes/route')
const conn = require('./database/connection')
const port = process.env.PORT
// const mongoose = require('mongoose')


//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())

app.use('/api/user/details',router)
app.listen(port, () =>{console.log(`Listening on port ${port}`)})