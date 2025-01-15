const express =require('express')
const path = require('path')

const dir=path.join(__dirname,'Public');
const server=express()

server.use(express.static(dir));

server.listen(3000,()=>{
    console.log("Server is Successfully Run");
    
})


