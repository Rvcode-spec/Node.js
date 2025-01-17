
module.exports=middlewar=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("Enter the age ")
    }else if(req.query.age<18){
        resp.send("Not user the site")
    }else{
        next()
    }
    
}