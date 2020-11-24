//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var JSAlert = require("js-alert");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/" , function(req,res){

    res.render("customerHome");

});

app.get("/rooms" , function(req,res){

    res.render("rooms");

});
app.get("/bookroom" , function(req,res){

    res.render("bookroom");

});
app.get("/cancelRoom" , function(req,res){

    res.render("cancelRoom");

});
app.get("/feedback" , function(req,res){

    res.render("feedback");

});

app.post("/feedback", function(req,res){

  res.redirect("feedback");

});

app.post("/rooms", function(req,res){

  res.redirect("/bookroom");

});

app.post("/bookroom", function(req,res){

  res.redirect("/rooms");

});

app.post("/cancelRoom", function(req,res){

  res.redirect("/customerHome");

});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
