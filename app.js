const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+"/public"));




// get

app.get('/', function(req, res){

    res.render('homepage');


});

app.get('/education', function(req, res){

  res.render('education');


});


app.get('/experience', function(req, res){

  res.render('experience');


});






app.listen(process.env.PORT || 3000, function () {

    if( process.env.PORT ){
     
      console.log("Server started on port " + process.env.PORT);
    }else{
      console.log("Server started on port 3000");
    }
  
  });