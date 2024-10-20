const express=require('express')
const server = express()
const Exexpress = require('express-session')
const cookieParser = require('cookie-parser')


server.use(cookieParser())


server.use(Exexpress({
  secret: 'Cookie',
  resave: false,
  saveUninitialized: true,

}))

server.get("/", function(req, res, next){

    // console.log("hello Ravi");
    res.cookie("Name" , "Ravi")
    res.cookie("Mobile" , "8765564321")
    res.send("data send ")
    // next()
})

server.get("/user", function(req, res, next){
    
    Exexpress.Session.Ravi="dice";
    res.send("User pages")

})

server.get("/product", function(req, res, next){

    res.send("Multipal Product")
    // next()

    
})

server.get("*", function(req, res, next){
    res.send("404! Page Not Found")
})

server.listen(3000)
