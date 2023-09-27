var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto');
});

router.post('/registro', function(req, res, next) {
    res.send('Muchas gracias por contactarse con nosotros ' + req.body.nombre + '. Nos pondremos en contacto al siguiente mail: ' + req.body.email);
  });

module.exports = router;
