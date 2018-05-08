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
const db = new sqlite3.Database('././db/dota2.db', sqlite3.OPEN_READWRITE, (err) => {
	if (err) {
    console.error(err.message);
  }
  console.log('Connected to the dota2 database.');
}); 

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
module.exports = db; 


