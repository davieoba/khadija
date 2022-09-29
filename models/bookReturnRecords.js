const mongoose = require('mongoose')

const bookRecordsSchema = new mongoose.Schema({
  return_ID: {
    type: Number
  },
  borrowers_ID: {
    type: Number
  },
  return_datereturned: {
    type: Date
  }
})

const BookRecord = mongoose.model('BookRecord', bookRecordsSchema)
module.exports = BookRecord