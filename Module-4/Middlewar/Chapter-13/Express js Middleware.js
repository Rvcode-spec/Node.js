const express = require('express')
// const { server } = require('typescript')

const server=express();

const middlewar=(req,resp,next)=>{  // Next is a Middlewar
    // console.log("middlewar working");
    if(!req.query.age){
        resp.send("Please Enter the age")
    }else if(req.query.age<18){
        resp.send("Not use the site")
    }
    
    else{
        next()
    }
    
}

server.use(middlewar)

server.get('/',(req,resp)=>{
    resp.send("Welcome to User Page")
})

server.listen(3000,()=>{
    console.log("Server Successfully Run");
    
})


