const express = require('express')
const path = require('path')
const models = require('./db/models')

const app = express()
const port = 3010

app.use(express.static(path.join(__dirname, 'proxy-blake', 'dist')))

app.get('/reviews', (req, res) => {
  const id = rand(1, 100)
  models.Product.findOne({ id: id }, (err, product) => {
    if (err) console.error(err)
    else {
      models.Review.find({ productId: id }, (err, reviews) => {
        if (err) console.error(err)
        else {
          res.send({ product, reviews })
        }
      })
    }
  })
})

app.get('/ikea', (req, res) => {
  models.Image.find({}, (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send(error)
    } else {
      res.send(data)
    }
  })
})

app.get('/products', (req, res) => {
  models.Product2.find({}, (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send(error)
    } else {
      res.send(data)
    }
  })
})

app.listen(port, () => {
  require('./db')
  console.log(`listening on port ${port}`)
})

function rand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
