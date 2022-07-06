const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const app =  express()
const router = require('./controller/routes/route')
const conn = require('./model/connection')
const ejs = require('ejs')
const port = process.env.PORT
// const mongoose = require('mongoose')


//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())

//view
app.set('view engine','ejs')
app.use('/api/user/details',router)


//default route
// app.get('/', (req, res) => {
//     let userData = {
//         name:"Muskaan Sharma",
//         email:"muskaan.sharma@plutustec.com",
//         contact:"1234567890",
//         pass:"admin",
//         cpass:"admin"
//     }
//     res.render('home',userData)
// })
app.listen(port, () =>{console.log(`Listening on port: http://localhost:${port}/`)})