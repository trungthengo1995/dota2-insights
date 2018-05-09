'use strict';

//create all related dependencies 
const Hapi = require('hapi');
const Hoek = require('hoek');
const jQuery = require('jQuery');

const Settings = require('./settings');

const path = require('path');
const Routes = require('./app/routes');

const express = require('express');
var fs = require('fs');
var dir = path.join(__dirname, '/assets/images/hero-images/');
var app = express();

var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

//the bugs related to Sequelize inside the models directory!!!!!
//const Models = require('./app/models');  

//instantiate server object with connection port of Settings 
const server = new Hapi.Server();
server.connection({
	port: Settings.port
});

//console.log('App already runnning after running internal scripts!')

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
			path: path.join(__dirname, 'app/views'),
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
	console.log('Server is running at ' + server.info.uri + ' on the port ' + server.info.port);

	// Check if jQuery is loaded
	if (jQuery) {
		console.log("jQuery loaded!");
	}
	if (typeof jQuery == 'undefined') {
		console.log('jQuery has not been loaded!');
	}
	
	//NOTE: Accessing the assets directory
//	app.get('*', function (req, res) {
//	
//		console.log("Getting asset files")
//    var file = path.join(dir, req.path.replace(/\/$/, '/index.html'));
//	
//    if (file.indexOf(dir + path.sep) !== 0) {
//        return res.status(403).end('Forbidden');
//    }
//    var type = mime[path.extname(file).slice(1)] || 'text/plain';
//    var s = fs.createReadStream(file);
//    s.on('open', function () {
//        res.set('Content-Type', type);
//        s.pipe(res);
//    });
//    s.on('error', function () {
//        res.set('Content-Type', 'text/plain');
//        res.status(404).end('Not found');
//    });
//});
});
