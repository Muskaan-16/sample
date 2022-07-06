const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('people', PersonSchema)