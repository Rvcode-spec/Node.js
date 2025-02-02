const express = require('express')
const app = express()


app.get('/', (req,resp)=>{
    resp.send('Welcome to E-Dashbord')
})

app.listen(5000,()=>{
    console.log("App Successfully ");
    
})