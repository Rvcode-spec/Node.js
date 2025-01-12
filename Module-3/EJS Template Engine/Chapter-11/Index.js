const { log } = require('console');
const express = require('express')
const path = require('path')

const dir = path.join(__dirname,'views')


const server = express();

server.set('view engine', 'ejs')
server.set('views', dir);

server.get('/',(req,resp)=>{
    resp.render('Index')
})

server.get('/Project',(req,resp)=>{
    const item={
        name:'Animal',
        Wight:'400',
    }
    resp.render('Project',{item})
})

server.listen(3500,()=>{
    console.log("Server is Successfully Run");
    
})