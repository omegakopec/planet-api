const router = require('express').Router()

router.get('/', (req, res) => {
  res.send("Moon API")
});

module.exports = router;
