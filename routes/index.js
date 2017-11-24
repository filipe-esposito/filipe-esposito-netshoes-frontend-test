var express = require('express');
var router = express.Router();
var path = require('path')
var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
	var product_data
	fs.readFile(path.join(__dirname, '../public/data', 'data.json'), 'utf8', (err, data) => {
		if (err) throw err
		product_data = JSON.parse(data)

		res.render('index', {
			title        : 'Netshoes: Teste Frontend - Filipe Espósito',
			product_list : product_data.products
		});
	})
});

module.exports = router;
