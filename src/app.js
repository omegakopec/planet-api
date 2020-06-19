const express = require('express')
const bodyParser = require('body-parser')
const logger = require('./util/logger.util')
const dateUtil = require('./util/date.util')
const mongoDBStorage = require('./storage/mongodb')

// Routes
const planetRoutes = require('./routes/planets')
const moonRoutes = require('./routes/moons')

// DB Connections
mongoDBStorage.connection()

const app = express()
const PORT = 3000
app.use('/planets', planetRoutes)
app.use('/moons', moonRoutes)
app.use(bodyParser.json())

app.listen(PORT, () => {
  logger.info(`Starting Server On Port ${PORT}`)
  logger.info(dateUtil.format(Date.now()))
})
