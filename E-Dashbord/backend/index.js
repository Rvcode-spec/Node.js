const express = require("express");
require("./DB/config");
const User = require("./DB/user");
const cors = require("cors");
const addProduct = require("./DB/add-product");

const app = express(); // ✅ Correct way to initialize Express
app.use(express.json()); // ✅ Middleware to parse JSON
app.use(cors()); //

app.post("/SignUp", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

app.post("/Login", async (req, resp) => {
  try {
    if (!req.body.email || !req.body.password) {
      return resp
        .status(400)
        .json({ result: "Email and password are required" });
    }

    let user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    }).select("-password");

    if (user) {
      return resp.json(user); // Send response and stop execution
    } else {
      return resp.status(404).json({ result: "No User Found" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ error: "Internal Server Error" });
  }
});

app.post('/add-product',async (req,resp)=>{
    let product =new addProduct(req.body);
    let result = await product.save();
    resp.send(result)
})

app.listen(5000, () => {
  console.log("App Successfully Running on Port 3000");
});
