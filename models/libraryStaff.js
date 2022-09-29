const mongoose = require('mongoose')

const libraryStaffSchema = new mongoose.Schema({
  staff_ID: {
    type: Number
  },
  staff_firstname: {
    type: String
  },
  staff_lastname: {
    type: String
  },
  staff_mobilenumber: {
    type: String
  },
  staff_email: {
    type: String
  },
  staff_authsalt: {
    type: String
  },
  staff_password: {
    type: String
  },
  staff_category: {
    type: String
  }
})

const LibraryStaff = mongoose.model('LibraryStaff', libraryStaffSchema)
module.exports = LibraryStaff