const express = require("express")
const logger = require("./util/logger.util")
const dateUtil = require("./util/date.util")

const app = express()
const port = 3000

app.get("/", (req, res) =>(
  logger.info(`Request to / at ${dateUtil.format(Date.now())}`),
  res.send("Welcome to the Planets API"))
)

app.listen(port, () => (
  logger.info(`Starting server on port : ${port}`),
  logger.info(dateUtil.format(Date.now())))
)