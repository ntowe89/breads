// // require mongoose 
// const mongoose = require('mongoose')
// // creating shorthand for the Schema constructor 
// const { Schema } = mongoose 

// const breadSchema = new Schema({
//   name: { type: String, required: true },
//   hasGluten: Boolean,
//   image: { type: String, default: 'http://placehold.it/500x500.png' }
// })


// const Bread = mongoose.model('bread', breadSchema)

// module.exports = Bread

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./bread')
