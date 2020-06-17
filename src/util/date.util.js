const moment = require('moment')

class DateUtil{
  /**
   *
   * @param {string} value
   * @param {string}format
   * @returns {string}
   * @description Formats date.
   */
  static format (value, format) {
    return (value && moment(value).utc(true).format(format || "LLLL"))
  }
}

module.exports = DateUtil;