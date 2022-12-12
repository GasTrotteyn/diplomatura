var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/entrando', function (req, res, next) {
	if (req.body.nombreEnviado) {
		req.session.nombre = req.body.nombreEnviado;
	}
	if (!req.session.contador) {
		req.session.contador = 1;
	} else {
		req.session.contador++;
	}
	res.redirect('/prueba');
});

module.exports = router;
