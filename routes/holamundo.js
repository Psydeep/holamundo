var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('holamundo', {
      title: 'Express',
      textoBienvenida: 'tuto express y nodejs'
  });
});

module.exports = router;
