//dependencies
const express = require('express')

//configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
console.log(PORT)

//middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

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
  

//listen
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})