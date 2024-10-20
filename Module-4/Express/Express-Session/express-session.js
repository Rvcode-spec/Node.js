const express=require('express')
const server = express()
const Esession = require('express-session')




server.use(function(req,res,next){
    console.log("Hello World");
    next();
    
})
server.get("/home",function(req,res){
    res.send("Home page data")
})

server.use(Esession({

  secret: 'keys',
  resave: false,
  saveUninitialized: false,

}))



server.get("/user", function(req,res,next){
    res.send("Users page only")
    // next();
})

server.get("/test", function(req,res,next){
    req.ravi=true;
    res.send("test page")
    next();
})



server.get("*", function(req,res){
    res.send(" 404  ! page ")
})




server.listen(3000)
