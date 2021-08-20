var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});


router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.tel;
  var mensaje = req.body.comentarios;
  console.log(req.body);

  var obj = {
    to: 'matu20011@gmail.com',
    subject: 'Contacto desde la web',
    html: nombre + " " + apellido + " se contacto a traves y quiere mas info a este correo: " + email + ". <br> Además, hizo el siguiente comentario: " + mensaje + ". <br> Su tel es" + telefono
  } //cierra el objeto

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMPT_USER,
      pass: process.env.SMTP_PASS
    }
  }); //cierra el transporter

  var info= await transporter.sendMail(obj)

  res.render('index', {
    message: 'Mensaje enviado correctamente',
  });



}); //cierra peticion del post 

module.exports = router;
