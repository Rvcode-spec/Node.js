const server = require('express');
const app=server();
const ejs = require('ejs')
const exjson=require('express-json')

app.use(exjson())

// app.use('express-json')
app.use(server.urlencoded({ extended: true }))


app.set('view engine', 'ejs');

app.get('/home',function(req,res){
    res.send("server started")
})

app.get('/form',function(req,res){
    res.render('details')
    console.log(req.query)
})

app.post('/showdata',function(req,res){
    // console.log(req.body)
    res.render('details')
    // res.send("hellp")
    res.send("working fine")
    console.log(req.body)
    
})

app.listen(4000);