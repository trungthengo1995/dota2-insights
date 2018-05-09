'use strict'

//Maybe change the libraries later 
const Models = require('../models/'); //it's the Hero object in the index file  
//const Path = require('path');


//NOTE|TODO: customize the following one to create CRUD functionalities corresponding to the controller 

//module.exports = {
//	 read: (request, reply) => {
//
//  }
//};



//Simple tests first for back-end outputting 
var Hero = require('../models/');
//var hero_instance = new Hero("Abadon");
Hero.searchByName('Abaddon');

