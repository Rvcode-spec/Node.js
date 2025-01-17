const express = require('express')
const middlewar=require('./Middlesare')
const route=express.Router();

const server = express()


server.get('/',(req,resp)=>{
    resp.send("Welcome To Singh House")
})

server.get('/user',middlewar,(req,resp)=>{
    resp.send("User Page ")
})

server.get('/work',middlewar,(req,resp)=>{
    resp.send("work Page ")
})

route.get('/about',middlewar,(req,resp)=>{
    resp.send("about Page ")
})

server.get('/contate',middlewar,(req,resp)=>{
    resp.send("contate Page ")
})

server.use('/',route)

server.listen(3000, ()=>{
    console.log("Server Sueccssfully Runing");
    
})