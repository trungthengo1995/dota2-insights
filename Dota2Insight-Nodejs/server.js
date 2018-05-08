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

server.register(
	[require('vision'),
  require('inert')], 
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


//basically synchronize the model with real-time data
//Models.sequelize.sync().then( () => {
	server.start( (err) => {
		Hoek.assert(!err, err); 
//		console.log('The connection name as string is: ' + server.info.uri + ' on the port ' + server.info.port)
	});
//}); 

