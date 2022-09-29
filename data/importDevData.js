require('dotenv').config({
  path: './../.env'
})
const mongoose = require('mongoose')
const fs = require('fs')

const DB = mongoose
  .connect(process.env.MONGODBURI)
  .then(() => {
    console.log('DB connected successfully')
  })
  .catch(() => {
    console.log('DB connection failed')
  })

// const BookReturnRecordDetails = require('./../models/bookReturnRecordDetails')
// const BookRecord = require('./../models/bookReturnRecords')
// const Book = require('./../models/books')
// const BorrowerRecordDetail = require('./../models/borrowersRecordDetails')
// const BorrowerRecord = require('./../models/borrowersRecords')
// const LibraryStaff = require('./../models/libraryStaff')
const Member = require('./../models/members')

const fileData = fs.readFileSync('./members.json').toString()

const dataObj = JSON.parse(fileData)

async function data() {
  if (process.argv[2] === '--import') {
    await importData()
    process.exit()
  } else if (process.argv[2] === '--delete') {
    await deleteData()
    process.exit()
  } else {
    process.exit()
  }
}

async function importData() {
  try {
    await Member.create(dataObj)
    console.log('data imported successfully')
  } catch (err) {
    console.log(err)
  }
}

data()