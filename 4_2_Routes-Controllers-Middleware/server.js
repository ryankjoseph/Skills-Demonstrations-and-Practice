//require modules
const express = require("express");
const path = require("path");
const teams = require("./db/eplTeams");
//create app
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//mount routes
app.get("/", function(req,res){
    res.render("home")
});
app.get("/epl", function(req,res){
    res.render("epl", teams)
});
//get app to listen
app.listen(3001,function(){
    console.log("Listening on port 3001");
});