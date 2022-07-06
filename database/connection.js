const dotenv = require('dotenv')
const mongoose = require('mongoose')

mongoose.connect(process.env.ConnectionURL, (result) => console.log("Connected to database on", process.env.ConnectionURL, result))

    // mongoose.connect(`mongodb+srv://muskaan_16:Muskaan_16@cluster0.x6mv0li.mongodb.net/?retryWrites=true&w=majority`, ()=> console.log("Connected to database"))
    .then(() => console.log("connected!"))
    .catch((err) => console.log(err))

module.exports = mongoose