var express = require('express');
var router = express.Router();
var request = require('request');
const token = process.env.GITHUB_TOKEN
const rootURL='https://api.github.com/'


/* GET home page. */
router.get('/', function(req, res, next) {
  const username = req.query.username;
  const options = {
    url: `${rootURL}users/${username}`,
     headers:{
      'User-Agent': `ryankjoseph`,
      Authorization: `token ${token}`
    }
  };
  request(options, function(err, response, body){
    const userData = JSON.parse(body);
    options.url = userData.repos_url;
    request(options, function(err,response,body){

      if (err) res.render('error',{error:err});
      userData.repos=JSON.parse(body);
      console.log(userData.repos[0]);
      res.render('index', {userData});
    })
  });
});

module.exports = router;
