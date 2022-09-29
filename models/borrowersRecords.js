const mongoose = require('mongoose')

const borrowerRecordSchema = new mongoose.Schema({
  borrowers_ID: {
    type: Number
  },
  member_ID: {
    type: Number
  },
  staff_ID: {
    type: Number
  },
  borrowers_dateborrowed: {
    type: Date
  },
  borrowers_duereturndate: {
    type: Date
  }
})

const BorrowerRecord = mongoose.model('BorrowerRecord', borrowerRecordSchema)
module.exports = BorrowerRecord