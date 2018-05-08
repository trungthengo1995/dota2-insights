'use strict';

const Path = require('path'); 
//const Hero = require('./controllers/hero'); 
const Home = require('./controllers/home'); 

console.log('Running the route.js. Inside the handler to get the directory /static/public')

module.exports = [
  {
    method: 'GET',
    path: '/',
//    handler: function (request, reply) {
//
//        return reply.view('index.html');
//    },
		handler: Home, 
    config: {
      description: 'Dota 2 Winning Prediction'
    }
  },
	{
	  // Static files
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: Path.join(__dirname, '../static/public')
      }
    },
    config: {
      description: 'Provides static resources'
    },
  }
];