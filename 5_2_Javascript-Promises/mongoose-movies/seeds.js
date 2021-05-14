 require('./config/database');// connect this script to the database
 const Movie = require('./models/movie');
 const Performer = require('./models/performer');
 const data = require('./data');
//  const p = new Promise(function(resolve,reject){
//    setTimeout(()=>{
//      resolve(55);
//    },2000)
//  } );
//  p.then(function(result){
//    console.log(result)
//  })

const p = new Promise(function(resolve,reject){
  setTimeout(()=>{
    reject('something went wrong');
  },2000)
} );
p.then(function(result){
  console.log(result)
})