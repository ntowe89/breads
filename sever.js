// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  


//configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
console.log(PORT)
const MONGO_URI = process.env.MONGO_URI

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))



//routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})


//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  

//start server

const start = async () => {
    await mongoose.connect(MONGO_URI)
    console.log('Connected to database')
}
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})
start()

