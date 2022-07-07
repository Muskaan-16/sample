const express = require('express')
const regRouter = express.Router()
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const People = require('../../model/sturcture')




regRouter.get('/register',async(req, res)=>{
    let userDetails = {
    fname: "req.body.fname",
    lname: "req.body.lname",
    email: "req.body.email",
    password: "req.body.password"
    }
    res.render('register')
})

regRouter.post('/register',async(req, res)=>{
    
     // password salt generation
     const salt10 = await new Promise((resolve, reject)=>{
        bcrypt.genSalt(10, (err, salt)=>{
            if(err) reject(err)
            resolve(salt)
        })
    })
    //password hashing
    const hashedPassword = await new Promise((resolve, reject)=>{
        bcrypt.hash(req.body.password, salt10, (err, hash)=>{
            if(err) reject(err)
            resolve(hash)
        })
    })
    let person = new People({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: hashedPassword
    })
    try {
        const p1 = await person.save()
    } catch (err) {
        res.send(`Error post: ${err}`)
    }
    res.render('register')
})

regRouter.get('/login',async(req, res)=>{
    // res.send("hello world")
    res.render('login')
})

module.exports = regRouter