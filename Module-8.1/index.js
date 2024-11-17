const express=require('express')
const app=express();
const User = require('./Models/userschema');
const mongoose=require('./config/mongoose')


app.get('/',(req,res)=>{

    res.send("testing")
})

app.get('/create',async(req,res)=>{
    
   let createduser=await User.create({

        name:"vikas",
        email:"xyz.com",
        password:"password",
        age:"28",

    })

    console.log("new user created",createduser)
    res.send("done done done")


})

app.get('/read',async (req,res)=>{
    // res.send("testing read route")
    let rv=await User.find({name:"rohan"})
    console.log("------",rv);
    res.send(rv)

})

app.get('/readsingle',async (req,res)=>{
    let singleuser=await User.findOne({age:"28"})
    console.log("----",singleuser);
    // res.json(singleuser)
    res.send(singleuser)
    

})

app.get('/update',async (req,res)=>{

  let rv= await User.findOneAndUpdate({name:"vikas"},{name:"rohan"},{new:true})
  res.send(rv)


})

app.get('/delete',async (req,res)=>{

    let rv=await User.findOneAndDelete({name:"rohan"},{new:true});
    res.send(rv)

    
})

app.listen(3000)