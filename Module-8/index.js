const express=require('express')
const app=express()

const mongoose=require('./config/mongoose')

app.get('/testing',(req,res,next)=>{
    res.send("testing hello world")
    console.log("done ")
})

app.listen(4000);