'use strict'; 

const Models = require('../models'); 

module.exports = (request, reply) => {
	Models.Note
		.findAll({
		order: [['date', 'DESC']]
	})
		.then((result) => {
			reply({
				data: {
					//....
				}, 
				page: 'Home-Dota2',
				description: 'Dota2 winning Prediction'
			});
	});
};

