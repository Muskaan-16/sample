const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

//routes files
const router = require('./controller/routes/route')
const regRouter = require('./controller/routes/register')

const app =  express()
const conn = require('./model/connection')
const ejs = require('ejs')
const port = process.env.PORT
const mongoose = require('mongoose')


//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())

//view
app.set('view engine','ejs')

//routes
app.use('/api/user/details',router)
app.use('/api/user',regRouter)

//server
app.listen(port, () =>{console.log(`Listening on port: http://localhost:${port}/`)})