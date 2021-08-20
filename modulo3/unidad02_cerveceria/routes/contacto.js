var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('contacto', {
        title: 'hola soy la pagina contacto'
    });
});

module.exports = router;
