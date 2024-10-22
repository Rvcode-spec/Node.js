const express =require('express')
const server = express()

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

server.listen(3000)