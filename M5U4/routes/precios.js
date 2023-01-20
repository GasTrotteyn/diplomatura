var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('precios', {
		nombre: req.session.nombre,
		logueado: req.session.nombre ? true : false,
	});
});

module.exports = router;
