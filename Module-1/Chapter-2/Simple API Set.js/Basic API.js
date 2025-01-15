const http = require('http');
const { json } = require('stream/consumers');
const UserData= require('./Users-Data.js')
http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":'application/json'});
    resp.write(JSON.stringify(UserData))
    resp.end();

}).listen(5000,()=>{
    console.log("Server is Successful Start");
    
})