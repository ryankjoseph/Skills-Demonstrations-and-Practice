 require('./config/database');// connect this script to the database
 const Movie = require('./models/movie');
 const Performer = require('./models/performer');
 const data = require('./data');
 const p = new Promise(function(resolve,reject){
   let value = 42;
   resolve(value);
 } );
 p.then(function(result){
   console.log(result)
 })