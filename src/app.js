const express = require('express')
const logger = require('./util/logger.util')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dateUtil = require('./util/date.util')

require('dotenv').config()

// Routes
const planetRoutes = require('./routes/planets')
const moonRoutes = require('./routes/moons')

const app = express()
const port = 3000

app.use(bodyParser.json())

const connectDB = async () => {
  await mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true })
  logger.info('Established Connection', dateUtil.format(Date.now()))
}

connectDB().then()

app.use('/planets', planetRoutes)
app.use('/moons', moonRoutes)

app.listen(port)
