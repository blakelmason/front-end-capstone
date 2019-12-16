const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://localhost/fec',
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log('connected to fec')
)
