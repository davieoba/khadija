const mongoose = require('mongoose')

const bookReturnRecordDetailsSchema = new mongoose.Schema({
  detailID: {
    type: String,
  },
  returnID: {
    type: String
  },
  bookID: {
    type: String
  },
  detail_numberofcopies: {
    type: String
  }
})

const BookReturnRecordDetails = mongoose.model('BookReturnRecordDetails', bookReturnRecordDetailsSchema)

module.exports = BookReturnRecordDetails