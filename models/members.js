const mongoose = require('mongoose')

const membersSchema = new mongoose.Schema({
  member_ID: {
    type: Number
  },
  memeber_lastname: {
    type: String
  },
  member_dateofbirth: {
    type: Date
  },
  member_gender: {
    type: String
  },
  member_mobile: {
    type: String
  },
  member_email: {
    type: String
  }

})

const Member = mongoose.model('Member', membersSchema)

module.exports = Member