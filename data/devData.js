const fs = require('fs')
const logger = require('./../utils/logger')

const fileObj = fs.readFileSync('./bookreturnrecorddetails.json', 'utf-8')

const data = JSON.parse(fileObj)

const newArr = data.map((el) => {
  return {
    detail_ID: parseInt(el.detail_ID, 10), return_ID: parseInt(el.return_ID, 10), book_ID: parseInt(el.book_ID, 10), detail_numberofcopies:
      parseInt(el.detail_numberofcopies, 10)
  }
})


fs.writeFileSync('bookreturnrecorddetails2.json', JSON.stringify(newArr))

const file2 = fs.readFileSync('./bookreturnrecords.json', 'utf-8')

const data2 = JSON.parse(file2)

const newArr2 = data2.map((el) => {
  return {
    return_ID: parseInt(el.return_ID, 10),
    borrowers_ID: parseInt(el.borrowers_ID, 10),
    return_datereturned: el.return_datereturned
  }
})

fs.writeFileSync('bookreturnrecords2.json', JSON.stringify(newArr2))


const file3 = fs.readFileSync('./books.json', 'utf-8')

const data3 = JSON.parse(file3)

const newArr3 = data3.map((el) => {
  return {
    book_ID: parseInt(el.book_ID),
    book_title: el.book_title,
    book_edition: el.book_edition,
    book_author: el.book_author,
    book_publisher: el.book_publisher,
    book_copies: parseInt(el.book_copies, 10),
    book_costs: parseFloat(el.book_costs, 10),
    book_remarks: el.book_remarks
  }
})


fs.writeFileSync('books2.json', JSON.stringify(newArr3))

const file4 = fs.readFileSync('./borrowersrecorddetails.json', 'utf-8')

const data4 = JSON.parse(file4)

const newArr4 = data4.map((el) => {
  return {
    details_ID: parseInt(el.details_ID, 10),
    borrowers_ID: parseInt(el.borrowers_ID, 10),
    book_ID: parseInt(el.book_ID, 10),
    detail_numberofcopies: parseInt(el.detail_numberofcopies, 10)
  }
})

fs.writeFileSync('borrowersrecorddetails2.json', JSON.stringify(newArr4))


const file5 = fs.readFileSync('./borrowersrecords.json', 'utf-8')

const data5 = JSON.parse(file5)

const newArr5 = data5.map((el) => {
  return {
    borrowers_ID: parseInt(el.borrowers_ID, 10),
    member_ID: parseInt(el.member_ID, 10),
    staff_ID: parseInt(el.staff_ID, 10),
    borrowers_dateborrowed: el.borrowers_dateborrowed,
    borrowers_duereturndate: el.borrowers_duereturndate
  }
})

fs.writeFileSync('borrowersrecords2.json', JSON.stringify(newArr5))

const file6 = fs.readFileSync('./members.json', 'utf-8')

const data6 = JSON.parse(file6)

const newArr6 = data6.map((el) => {
  return {
    member_ID: parseInt(el.member_ID),
    member_lastname: el.member_lastname,
    member_dateofbirth: el.member_dateofbirth,
    member_gender: el.member_gender,
    member_mobile: el.member_mobile,
    member_email: el.member_email
  }
})

fs.writeFileSync('members2.json', JSON.stringify(newArr6))
