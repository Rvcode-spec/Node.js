const http=require('http')
const server=http.createServer(function(req, res){
    if(req.url==='/'){
        res.end(" server start")
    }else if(req.url==='/admin'){
        res.end("Admin file")
    }else{
        res.end()
    }
    
})

server.listen(1212);


