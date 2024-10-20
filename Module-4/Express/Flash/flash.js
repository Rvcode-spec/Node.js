const express = require('express')
const server = express()
const Exexpress =require('express-session')
const flash =require('connect-flash')
const cookieParser = require('cookie-parser')


server.use(cookieParser())


server.use(flash())

server.use(Exexpress({
    secret: 'flssh',
    resave: false,
    saveUninitialized: false,
  
  }))

server.get('/', function(req, res, next){
    res.send("Welcome the come page")
    // req.flash('info',"vikas") 
    
})

server.get('/user', function(req, res, next){
    req.flash('info','some info for flash') 
    res.redirect('/test');


   
})

server.get('/test', function(req, res, next){
    let msg=req.flash('info')
    // console.log(req.flash.info)
    // res.send(msg)
    console.log("hello world ")
    console.log(msg)
    res.send(msg)
})

server.get('/admin', function(req, res, next){
    res.send("control the sites")
})

server.get('*', function(req, res, next){
    res.send("404! data is not found")
})

server.listen(2000)