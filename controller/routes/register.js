const express = require('express')
const regRouter = express.Router()
const bodyParser = require('body-parser')
const People = require('../../model/sturcture')

regRouter.get('/register',async(req, res)=>{
    // res.send("hello world")
    res.render('register')
})

regRouter.get('/login',async(req, res)=>{
    // res.send("hello world")
    res.render('login')
})

module.exports = regRouter