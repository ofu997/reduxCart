"use strict"
var express = require("express");
var app = express();
var path= require('path');

// Middleware to define static images
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'src/index.html'))
})

app.listen(3000, function(){
  console.log('app is running on localhost 3000');
})