'use strict';

const importer = require('anytv-node-importer');

module.exports = (router) => {

	const __ = importer.dirloadSync(__dirname + '/../controllers/');

	router.get('/api/addMatch', __.gamescontroller.addMatch);
	
	router.all('*', (req, res) => {
		res.status(404).send({message : 'Unmatched route. =(('});
	});

	return router;
};