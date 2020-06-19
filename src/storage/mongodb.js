const mongoose = require('mongoose')
const logger = require('../util/logger.util')
require('dotenv').config()

class MongoDB{
  static connection(){
    try {
      logger.info('Attempting Connection')
      mongoose.connect(process.env.DB_CONNECTION,
        { useNewUrlParser: true, useUnifiedTopology: true })
    }catch (err) {
      logger.error(err)
    }
  }
}

module.exports = MongoDB;
