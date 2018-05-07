'use strict'

//Contain the connection to database and Sequelize settup 
const Fs = require('fs');
const Path = require('path');
const Sequelize = require('sequelize');
const Settings = require('../../settings');
const dbSettings = Settings[Settings.env].db;
			
const sequelize = new Sequelize(dbSettings.database, dbSettings.user, dbSettings.passwords, dbSettings);
const db = {}; 

// Read all the files in this directory (/model) and import them as models
Fs.readdirSync(__dirname)
		.filter((file) => (file.indexOf('.') != 0) && (file !== 'index.js'))
		.forEach( (file) => {
				const model = sequelize.import(Path.join(__dirname, file)); 
				db[model.name] = db; 
		}); 

//add sequelize and Sequelize as part of our db object, the first one is used in server.js to connect to the database before starting the server, and the second one is included for convenience 
db.sequelize = sequelize; 
db.Sequelize = Sequelize; 



