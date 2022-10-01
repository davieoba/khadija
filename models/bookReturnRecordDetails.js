const mongoose = require('mongoose')

const bookReturnRecordDetailsSchema = new mongoose.Schema({
  detail_ID: {
    type: Number,
  },
  return_ID: {
    type: Number
  },
  book_ID: {
    type: Number
  },
  detail_numberofcopies: {
    type: Number
  }
})

const BookReturnRecordDetails = mongoose.model('BookReturnRecordDetails', bookReturnRecordDetailsSchema)

module.exports = BookReturnRecordDetails