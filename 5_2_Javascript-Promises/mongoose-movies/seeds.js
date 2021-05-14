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

// const p = new Promise(function(resolve,reject){
//   setTimeout(()=>{
//     value = 55;
//     if(value) resolve(value)
//     reject('something went wrong');
//   },2000)
// } );
// p.then(function(result){
//   console.log(result)
// }).catch( (err)=> {
//   console.log(err)
// })
// const p = new Promise(function(resolve,reject){
//   setTimeout(()=>{
//     value = 55;
//     if(value) resolve(value)
//     reject('something went wrong');
//   },2000)
// } );
// p.then(function(result){
//   console.log(result)
//   return 42
// }).catch( (err)=> {
//   console.log(err)
// })
// .then(function(result){
//   console.log(result)
//   return "Done!"
// })
// .then(function(result){
//   console.log(result)
// })

// function asyncAdd(a,b, delay){
//   return new Promise(function(resolve){
//     setTimeout(()=>{
//       resolve(a+b);
//     }, delay);
//   });
// }

// asyncAdd(5,10,2000)
// .then(function(sum){
//   console.log(sum);
//   return asyncAdd(sum, 100, 1000);
// })
// .then(function(sum){
//   console.log(sum)
//   return asyncAdd(sum, 1000,2000)
// })
// .then(function(sum){
//   console.log(sum);
// });

// Movie.deleteMany({})
// .then(function(results){
//   console.log('Deleted Movies:', results);
//   return Performer.deleteMany({});
// })
// .then(function(results){
//   console.log("Deleted Performers:", results);
// })
// .then(function(){
//   process.exit();
// })
const p1 = Movie.deleteMany({});
const p2 = Performer.deleteMany({});
Promise.all([p1, p2])
.then(function(result){
  console.log(result);
  return Performer.create(data.performers);
}).then(function(result){
  console.log(result);
  return Movie.create(data.movies);
}).then(function(result){
  console.log(result);
  process.exit();
})