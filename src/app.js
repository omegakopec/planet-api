const express = require('express')
const bodyParser = require('body-parser')
const logger = require('./util/logger.util')
const dateUtil = require('./util/date.util')
const mongoDBConnection = require('./storage/mongodb')

// Routes
const planetRoutes = require('./routes/planets')
const moonRoutes = require('./routes/moons')

// DB Connection
mongoDBConnection()

const app = express()
const PORT = 3000
app.use('/planets', planetRoutes)
app.use('/moons', moonRoutes)
app.use(bodyParser.json())

app.listen(PORT, () => {
  logger.info(`Starting Server On Port ${PORT}`)
  logger.info(dateUtil.format(Date.now()))
})
