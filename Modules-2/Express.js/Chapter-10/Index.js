const express = require('express')
const path = require('path')

const server=express()
const dir= path.join(__dirname,'Remove extension')

server.get('/', (req,resp)=>{
    resp.sendfile(`${dir}/Index.html`)
})

server.get('/User', (req,resp)=>{
    resp.sendfile(`${dir}/User.html`)
})

server.get('*', (req,resp)=>{
    resp.sendfile(`${dir}/404.html`)
})

server.listen(3000,()=>{
    console.log("Server is Succseefully Run");
    
})