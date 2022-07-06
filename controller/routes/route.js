const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const People = require('../../model/sturcture')

//get all data
router.get('/', async (req, res) => {
    try {
        let personName = await People.find()
        res.json(personName)
    } catch (err) {
        res.send(`Error ${err}`)
    }
})

//get 1 parameterised data
router.get('/:id', async (req, res) => {
    try {
        let personName = await People.findById(req.params.id)
        // res.json(personName)
        res.render('home',(personName))
    } catch (err) {
        res.send(`Error ${err}`)
    }
})

//insert data
router.post('/', async (req, res) => {
    console.log('req.body', req.body);
    const person = new People({
        fname: req.body.fname,
        lname: req.body.lname
    })
    try {
        const p1 = await person.save()
        res.json(p1)
        console.log(p1)
    } catch (err) {
        res.send(`Error: ${err}`)
    }

    // let personName = req.body
    // res.send(personName)
})

//update data of specified field
router.patch('/:_id', async (req, res) => {
    try {
        let person = await People.findById(req.params.id)
        person.lname = req.body.lname
        let p1 = await person.save()
        res.json(p1)
    } catch (err) {
        // console.log(err)
        res.send(`Error: ${err}`)
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
        // console.log(err)
        res.send(`Error: ${err}`)
    }
})

//delete the specific data
router.delete('/:_id', async (req, res) => {
    console.log(req.params)
    let person = await People.deleteOne(req.params)
    res.send(person)
})
module.exports = router
