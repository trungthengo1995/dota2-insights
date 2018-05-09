'use strict';

const path = require('path');
const Home = require('./controllers/home');
const express = require('express');

console.log('Running the route.js. Inside the handler trying to get the directory /static/public???')

module.exports = [
	/*
	{
		// Static files
		method: 'GET',
		path: '/{p*}',
		
		//		handler: function (request, reply) {
		//			//reply('Trying to the directory /static/public');
		//			reply.file('../../static/public');
		//			//reply('<img src="../../static/public/assets/images/hero\-images/beastmaster_sb.png">');
		//		},
	*/
	{
		method: 'GET',
		path: '/assets/{path*}',
		handler: {
			directory: {
				path: path.join(__dirname, '/assets'),
				//path: '/assets/images/hero-images/',
				redirectToSlash: true,
				index: true,
				listing: true
			}
		},
		config: {
			description: 'Dota 2 Winning Prediction'
		}
	}
	,{
		method: 'GET',
		path: '/',
		handler: Home,
		config: {
			description: 'Gets all the notes available'
		}
	}
];


console.log("After module.exports line")
/*
//NOTE: use Express Static 
var app = express();
var dir = Path.join(__dirname, './assets/images/hero-images/');
app.use(express.static(dir));
*/





