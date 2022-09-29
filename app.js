const config = require('./utils/config')
const logger = require('./utils/logger')
const express = require('express')
const mysql = require('mysql2')

const app = express()
const cors = require('cors')


app.use(express.json())
app.use(cors())



module.exports = app