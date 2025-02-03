const express = require('express');
require('./DB/config');
const User = require('./DB/user');
const cors = require('cors')  


const app = express(); // ✅ Correct way to initialize Express
app.use(express.json()); // ✅ Middleware to parse JSON
app.use(cors()) // 

app.post('/SignUp', async (req, resp) => {
    let user = new User(req.body)
    let result = await user.save()
    result =result.toObject();
    delete result.password
    resp.send(result);
});

app.post('/Login', async(req,resp)=>{
    // console.log(req.body);

    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select('-password');
        if(user){           // Check the User 
            resp.send(user)
        }else {
            resp.send({result:"No User Found"})
        }
        resp.send(user)
    }else {
        resp.send({result:"No User Found"})
    }
})

app.listen(5000, () => {
    console.log("App Successfully Running on Port 3000");
});
