'use strict'
//Basically: set up Nodejs objects (Path, Sequelize, Fs) and settings and read/execute all model files in the directory 
console.log("Running index script (first script) for the model!")

//Contain the connection to database and Sequelize settup 
const Fs = require('fs');
const Path = require('path');
//const Sequelize = require('sequelize');
const sqlite3 = require('sqlite3').verbose();


//NOTE: these are just fixed trivial settings -> don't change
const Settings = require('../../settings');
const dbSettings = Settings[Settings.env].db;

//open the database connection
//NOTE: ./ instead of ../ for this case - just's something I tried
/*
const db = new sqlite3.Database('././db/dota2.db', sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log('Connected to the dota2 database.');
});
*/
/*
//pre-testing for the SQL query
db.serialize(() => {
  db.each(`SELECT HeroId as id,
                  Name as name
           FROM Heroes`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.name);
  });
});
*/

const db = new sqlite3.Database('././db/dota2.db');

//function Hero(key) {
//	console.log("Creating the new Hero object with setting up the db file");
//	this.key = key;
//};

//SUGGEST: have the search bar return the result with the auto-corrected key
//Hero.prototype
exports.searchByName = function searchByName(key) {
	let sql = 'SELECT Name FROM heroes WHERE Name == ?';
	console.log(`Searching for the hero ${key}`);
	
	db.serialize(() => {
		db.all(sql, [key], (err, row) => {
			if (err) {
				console.error(err.message);
			}
			return row ? 
				console.log(row.id + "\t" + row.name) 
			: console.log(`No hero existed with the name of ${key}`);
		});
	});
	
	db.close(); 
};

/*//SUGGESTION: if searching attributes, only appear have limited results
exports.searchByAttribute = function searchByAttribute(key) {
};
*/

exports.searchByRole = function searchByRole(key) {
	let sql = 'SELECT Name FROM roles WHERE Name == ?';
	console.log(`Searching for the role ${key}`);
	
	db.serialize(() => {
		db.all(sql, [key], (err, row) => {
			if (err) {
				console.error(err.message);
			}
			return row ? 
				console.log(row.id + "\t" + row.name) 
			: console.log(`No hero existed with the name of ${key}`);
		});
	});
	
	db.close(); 
};

