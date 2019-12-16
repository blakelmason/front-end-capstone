const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  itemimage: String,
  itemname: { type: String, unique: true },
  typesize: String,
  price: Number,
  description: String,
  rating: Number,
  numberRatings: Number
})

let Product2 = mongoose.model('Product2', schema)

module.exports = Product2
