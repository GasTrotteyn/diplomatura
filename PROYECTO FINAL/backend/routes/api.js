var express = require('express');
var router = express.Router();
var preciosModel = require('../models/preciosModel');

router.get('/precios', async (req, res, next) => {
	let items = await preciosModel.getPrecios();
	res.json(items);
});

module.exports = router;
