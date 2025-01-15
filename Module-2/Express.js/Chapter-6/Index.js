const express = require('express')
const app = express();

app.get('/',(req,resp)=>{
    resp.send('Welcome the Home Page')
})

app.get('/task',(req,resp)=>{
    resp.send('this is a task page')
})

app.get('/about',(req,resp)=>{
    resp.send('This is a about Page')
})


app.listen(3000, ()=>{
    console.log("Server is Successfully  run");
});

