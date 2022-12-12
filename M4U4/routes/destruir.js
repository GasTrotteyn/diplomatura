var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/destruir', function (req, res, next) {
	//par conservar la sesión y contar las veces que entró el usuario reseteo el nombre en lugar de destruir la sesión.
	//req.session.destroy();
	req.session.nombre = null;
	console.log('destruyendo');
	res.redirect('/prueba');
});

module.exports = router;
