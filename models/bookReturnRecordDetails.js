const mongoose = require('mongoose')

const bookReturnRecordDetailsSchema = new mongoose.Schema({
  detailID: {
    type: Number,
  },
  returnID: {
    type: Number
  },
  bookID: {
    type: Number
  },
  detail_numberofcopies: {
    type: Number
  }
})

const BookReturnRecordDetails = mongoose.model('BookReturnRecordDetails', bookReturnRecordDetailsSchema)

module.exports = BookReturnRecordDetails