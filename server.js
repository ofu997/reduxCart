"use strict"
var express = require("express");
var app = express();
var path= require('path');
var port=8080;

// Middleware to define static images
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port, function(){
  console.log('app is running on localhost '+port.toString());
})