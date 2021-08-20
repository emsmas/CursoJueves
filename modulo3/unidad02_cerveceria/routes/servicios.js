var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('servicios', {
    title: 'Hola soy pagina de servicios',
    subtitulo: 'esto es una prueba 2'
  });
});

module.exports = router;
