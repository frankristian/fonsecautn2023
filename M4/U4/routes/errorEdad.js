var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/errorEdad', function(req, res, next) {
  res.render('errorEdad');
});

module.exports = router;
