const mongoose = require('mongoose')

var schema = new mongoose.Schema({
  name: String,
  shortDesc: String,
  price: Number,
  rating: Number,
  reviewNum: Number,
  midDesc: String,
  imageSrc: [String]
})

var Image = mongoose.model('Image', schema)

module.exports = Image
