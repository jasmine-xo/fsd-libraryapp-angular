const express=require('express');

const cors=require('cors');
var bodyParser = require('body-parser');
var app=new express();
app.use(cors());
app.use(bodyParser.json())
const Authdata= require('./model/authdata')
const Bookdata= require('./model/bookdata')


app.get('/books',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    Bookdata.find()
                .then(function(books){
                    res.send(books);
                });
            });
           
app.get("/authors/single",function(req,res){
    res.send("hello");
})


app.get('/authors',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    Authdata.find()
                .then(function(authors){
                    res.send(authors);
                });


});

app.post('/insertbook',function(req,res){
    res.header("Access-Control-Allow-Origin")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    
    console.log(req.body);
    var product={
        title:req.body.product.title,
        author:req.body.product.author,
        genre:req.body.product.genre,
        imageUrl:req.body.product.imageUrl,
    }
    var product=new Bookdata(product);
    product.save();

});

app.post('/insertauth',function(req,res){
    res.header("Access-Control-Allow-Origin")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    
    console.log(req.body);
    var auth={
        name:req.body.auth.name,
        nationality:req.body.auth.nationality,
        genre:req.body.auth.genre,
        imageUrl:req.body.auth.imageUrl,
    }
    var auth=new Authdata(auth);
    auth.save();

});

app.listen("3019");