const express = require('express')
const server = express();

server.get('/',(req,resp)=>{
    resp.send('Welcome the my web apge ') // server to Browser send 
    console.log("Outout send the browser", req.query.name); //http://localhost:3000/?name=Ravi//Browser to server send data
    
})

server.listen(3000, () => {
    console.log('Server is running');
});

//   values ${req.query.name} get the paraments to node js .