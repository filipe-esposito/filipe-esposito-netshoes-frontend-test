var express = require('express');
var router = express.Router();
var path = require('path')
var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
	var product_data
	fs.readFile(path.join(__dirname, '../public/data', 'data.json'), 'utf8', (err, file_data) => {
		if (err) throw err
		product_data = JSON.parse(file_data)

		const data = {
			title        : 'Netshoes: Teste Frontend - Filipe Espósito',
			product_list : product_data.products
		};
		const vueOptions = {}
		res.renderVue('index', data, vueOptions);

		/* res.render('index', {
			title        : 'Netshoes: Teste Frontend - Filipe Espósito',
			product_list : product_data.products
		}); */
	})
});

module.exports = router;
