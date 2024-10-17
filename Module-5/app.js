const server = require('express');
const app=server();
const ejs = require('ejs')
const exjson=require('express-json')

app.use(exjson())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');



app.get('/',function(req,res,next){
    res.send("server started")
})

app.get('/admin',function(req,res){
    res.send("admin data found")
})

app.get('/admin/:vikas/:age',function(req,res){
    // res.send("admin->users data found")
    // res.send("working")
    // console.log(first)
    res.send(`data found in params ${req.params.vikas} and ${req.params.age}`)
    console.log(req.params.vikas)
    console.log(req.params.age)

})

app.get('/create',function(req,res){
    console.log("working")
    res.render('index')
})

app.get('/dice',function(req,res){
    res.render('users')
})


app.get('/form',function(req,res){
    res.render('details')
    res.send("working")
    console.log(req.query);


   
})


app.get("*",function(req,res,next){
    res.send("no page found")
})


app.listen(3000);