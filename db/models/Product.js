const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  id: Number,
  identifier: String,
  description: String,
  length: Number,
  width: Number,
  height: Number,
  care: String,
  environment: String,
  materials: String,
  packages: Number,
  name: String,
  productType: String,
  weight: Number
})

const Product = mongoose.model('Product', schema)

module.exports = Product
