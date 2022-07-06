const dotenv = require('dotenv')
const mongoose = require('mongoose')

mongoose.connect(process.env.ConnectionURL, (result) => console.log("Connected to database on", process.env.ConnectionURL, result))

    
    .then(() => console.log("connected!"))
    .catch((err) => console.log(err))

module.exports = mongoose