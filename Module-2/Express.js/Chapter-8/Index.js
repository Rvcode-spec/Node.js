const express =require('express')
const server= express();

server.get("/", (req,resp)=>{
    resp.send(`<h2>Welcome the Web Application</h2>
        <a href='/about'>go to about page</a>`)
})

server.get("/about", (req, resp)=>{
    resp.send(`<h1>This is About page </h1>`)
})

server.get("/list", (req, resp)=>{
    resp.send(`
        <h1>Welcome to list page </h1>
        <br>
        <input type="text" placeholder="Enter the name" value = "${req.query.name}">
        <button>Click me</button>
        
        `)
})

server.get("/user", (req, resp)=>{
    resp.send(`[
        {
            name :'Ravi',
            Phono: '9876543232'
        }
        

        {
            name :'Sukanyaa Singh',
            Phono: '9876543132'
        }
            
        {
            name :'Shankar',
            Phono: '9876543332'
        }
        ]`)
})


server.listen(4500,()=>{
    console.log("Server is Successfully");
    
})