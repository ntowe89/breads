require('dotenv').config()
const mongoose = require('mongoose')

// const connect = async () => {
//   await mongoose.connect(process.env.MONGO_URL)
//   console.log("database connected")
// }

// connect()

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./bread')

