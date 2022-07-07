const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const People = require('../../model/sturcture')

//get all data
router.get('/', async (req, res) => {
    try {
        let personName = await People.find()
        res.json(personName)
    } catch (err) {
        res.send(`Error get all ${err}`)
    }
})

//get 1 parameterised data
router.get('/:id', async (req, res) => {
    try {
        let personName = await People.findById(req.params.id)
        // res.json(personName)
        res.render('home',(personName))
    } catch (err) {
        res.send(`Error get 1 ${err}`)
    }
})

//insert data
router.post('/', async (req, res, next) => {

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
        res.json(p1)
    } catch (err) {
        res.send(`Error post: ${err}`)
    }
})

//update data of specified field
router.patch('/:_id', async (req, res) => {
    try {
        let person = await People.findById(req.params.id)
        person.email = req.body.email
        let p1 = await person.save()
        res.json(p1)
    } catch (err) {
        res.send(`Error patch: ${err}`)
    }
})

//update data of eniter entity
router.put('/:_id', async (req, res) => {
    try {
        let p1 = await People.updateOne(
            req.params,
            { $set: req.body }
        )
        res.json(p1)
    } catch (err) {
        res.send(`Error put: ${err}`)
    }
})

//delete the specific data
router.delete('/:_id', async (req, res) => {
    console.log(req.params)
    let person = await People.deleteOne(req.params)
    res.send(person)
})
module.exports = router
