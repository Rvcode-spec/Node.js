const express =require('express');
const dbConnect = require('./mongodb');

const server =express();

server.use(express.json())


server.get('/',async (req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray()
    resp.send({data})
    console.log(data);
    

})

server.post('/', async(req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result)
})


server.put('/:name', async(req,resp)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        // {name:"Roshan Singh"},
        {name:req.params.name},
        {$set:req.body}
    )
    resp.send({result:"Update"})
})


server.delete('/:id', async (req,resp)=>{
    console.log(req.params.id);
    
    let data = await dbConnect();
    let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    resp.send(result)
})

server.listen(5000,()=>{
    console.log("Server Successfully Run");
    
})