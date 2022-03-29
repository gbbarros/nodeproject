
const mongoose = require('mongoose')

const Customer = mongoose.model('Customer', {
  name: String,
  number: Number,
})

module.exports = Customer