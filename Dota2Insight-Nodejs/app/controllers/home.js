'use strict'; 
console.log("Running index script (first script) for the HOME controller!")
const Models = require('../models'); 
const Path = require('path');

module.exports = (request, reply) => {
		console.log("Inside the Home controller!!!")
		
		return reply.view('index.html'); 
};

