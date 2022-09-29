const mongoose = require('mongoose')

const borrowerRecordDetailSchema = new mongoose.Schema({
  details_ID: {
    type: Number,
  },
  borrowers_ID: {
    type: Number
  },
  book_ID: {
    type: Number
  },
  detail_numberofcopies: {
    type: Number
  }

})

const BorrowerRecordDetail = mongoose.model('BorrowerRecordDetail', borrowerRecordDetailSchema)
module.exports = BorrowerRecordDetail
