const express = require('express');
require('./DB/config');
const Usermodel = require('./DB/user');
const cors = require('cors')  


const app = express(); // ✅ Correct way to initialize Express
app.use(express.json()); // ✅ Middleware to parse JSON
app.use(cors()) // 

app.post('/SignUp', async (req, resp) => {
    let user = new Usermodel(req.body)
    let result = await user.save()
    resp.send(result);
});

app.listen(5000, () => {
    console.log("App Successfully Running on Port 3000");
});
