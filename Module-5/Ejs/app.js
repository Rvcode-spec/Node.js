const express =require('express')
const path = require('path'); 
const server = express()
const ejs = require('ejs')


server.set('view engine', 'ejs');


server.set('views', path.join(__dirname, 'views')); // Adjust path if needed



server.get('/', function(req, res, next){
    res.send("Welcome the Home Page")
})

server.get('/admin', function(req, res, next){
    res.send("Admin page ")
})

server.get('/admin/:test/:name',function(req, res, next){

        res.send(`Working the file ${req.params.test} and ${req.params.name}`)
        console.log(req.params.name);
        console.log(req.params.test);
})

server.get('/about', function(req, res, next){
    res.render("info")
})

server.listen(3000)