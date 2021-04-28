//reqyure modules
const express = require("express");
const path = require("path");
const todoDB = require("./data/todo-db");
//create app
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("dirname -->", __dirname);
console.log("path joined-->", path.join(__dirname, "views"));
//mount routes
app.get("/", function(req,res){
    res.redirect("/todos")
});
app.get("/todos",function(req,res){
    res.render("todos/index",{
        todos: todoDB.getAll()
    })
})
app.get("/home", function(req,res){
    res.render("home")
})
//get app to listen
app.listen(3000,function(){
    console.log("Listening on port 3000");
});