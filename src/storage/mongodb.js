const mongoose = require('mongoose')
const logger = require('../util/logger.util')
require('dotenv').config()

const MongoDBConnection = async () => {
    try {
      logger.info("Attempting Connection...")
      mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false})
      logger.info("MongoDB connection established")
    }catch (err) {
      logger.error(err)
      process.exit(1)
    }
  }

module.exports = MongoDBConnection;
