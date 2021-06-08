var express = require('express');
var dbclient = require('./findprice');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json(true));
app.use(express.static('public'));

app.get('/findprice',function(req,res){
    var valueprice = {
        "price" : req.body.price
    };
    dbclient.findprice(valueprice).then(function(value){
        res.send(value);
    }).catch(function(err){
        res.send(err);
    });
});


app.listen(8000,function(req,res){
    console.log('server start');
});