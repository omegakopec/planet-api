const moment = require("moment")

class DateUtil{
  static format (value, format) {
    return (value && moment(value).utc(true).format(format || "LLLL"))
  }
}

module.exports = DateUtil;