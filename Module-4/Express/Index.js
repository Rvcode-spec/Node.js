/*
server.get("routes", "handler" )
*/
const express=require('express')
const server = express()

server.use(function(req,res,next){  // Ues the middelware
    console.log("Hello World");    
    next();
    
})

server.get("/home",function(req,res){
    res.send("(express-session) Home page data")
})




server.get("/user", function(req,res,next){
    res.send("Users page only")
    // next();
})

server.get("*", function(req,res){
    res.send(" 404  ! page ")
})




server.listen(1232)
