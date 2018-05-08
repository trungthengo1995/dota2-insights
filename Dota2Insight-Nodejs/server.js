'use strict';

//create all related dependencies 
const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');

const Path = require('path');
const Routes = require('./app/routes');

//the bugs related to Sequelize inside the models directory!!!!!
//const Models = require('./app/models');  

//instantiate server object with connection port of Settings 
const server = new Hapi.Server();
server.connection({
	port: Settings.port
});

console.log('About to run the app!')

////create a testing route and initiate the HTTP call -> passed!
/* 
server.route({
	method: 'GET',
	path: '/',
	handler: (request, reply) => {
		reply('Hello, this is the Nodejs project for Dota2Insight');
	}
});

server.start((err) => {
  Hoek.assert(!err, err);
  console.log(`Server running at: ${server.info.uri}`);
});
*/

///*
server.register(
	[require('vision'), require('inert')],
	(err) => {
		Hoek.assert(!err, err);

		server.views({
			engines: {
				html: require('handlebars')
			},
			path: Path.join(__dirname, 'app/views'),
			compileOptions: {
				pretty: false
			},
			isCached: Settings.env === 'production',
		});

		// Add routes
		server.route(Routes);
	});
//*/


server.start((err) => {
	Hoek.assert(!err, err);
			console.log('The connection name as string is: ' + server.info.uri + ' on the port ' + server.info.port)
});
