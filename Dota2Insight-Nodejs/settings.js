//This load .env file and add values to process.env. Remove this line if don't want this functionality 

require('dotenv').config({silent: true});

module.exports = {
	port: process.env.PORT || 3000, 
	env: process.env.ENV || 'development', 
	
	//environment-dependent settings 
	development: {
		db: {
			dialect: 'sqlite',
			storage: ':memory:'
		}
	},
	production: {
			db: {
				dialect: 'sqlite',
				storage: 'db/database.sqlite'		
			}
	}
};

