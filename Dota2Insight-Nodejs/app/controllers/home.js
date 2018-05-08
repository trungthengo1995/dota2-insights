'use strict'; 
console.log("Running index script (first script) for the controller!")

const Models = require('../models'); 

module.exports = (request, reply) => {

		return reply.view('index.html'); 
};

