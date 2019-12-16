const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  id: Number,
  valueForMoney: Number,
  productQuality: Number,
  Appearance: Number,
  easeOfAssembly: Number,
  worksAsExpected: Number,
  username: String,
  date: Date,
  title: String,
  text: String,
  notHelpful: Number,
  helpful: Number,
  productId: Number,
  recommend: Boolean
})

const Review = mongoose.model('Review', schema)

module.exports = Review
