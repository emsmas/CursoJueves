var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('nosotros', {
    title: 'Hola soy pagina de nosotros',
    subtitulo: 'esto es una prueba'
  });
});

module.exports = router;
