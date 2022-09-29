const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  book_ID: {
    type: Number
  },
  book_title: {
    type: String
  },
  book_edition: {
    type: String
  },
  book_author: {
    type: String
  },
  book_publisher: {
    type: String
  },
  book_copies: {
    type: Number
  },
  book_costs: {
    type: Number
  },
  book_remarks: {
    type: String
  }
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book

