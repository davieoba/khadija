const config = require('./utils/config')
const logger = require('./utils/logger')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bookRoutes = require('./routes/book-routes')

logger.info('connecting to', config.MONGODBURI)

mongoose.connect(config.MONGODBURI).then(() => {
  logger.info('connected to DB')
}).catch((err) => {
  logger.error('error connecting to the DB', err.message)
})

const app = express()

app.use(express.json())
app.use(cors())

app.use('api/v1/books', bookRoutes)


module.exports = app
