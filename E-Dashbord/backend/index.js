const express = require("express");
require("./DB/config");
const User = require("./DB/user");
const cors = require("cors");
const addProduct = require("./DB/add-product");

const jwt = require('jsonwebtoken');
const jwtKey = 'e-comm';

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
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return resp.status(400).json({ result: "Email and password are required" });
    }

    // Check if user exists in the database
    const user = await User.findOne({ email, password }).select("-password");

    if (user) {
      // Generate JWT token if user is found
      jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          return resp.status(500).json({ result: "Token generation failed" });
        }
        return resp.json({ user, auth: token });
      });
    } else {
      return resp.status(404).json({ result: "No User Found" });
    }
  } catch (error) {
    console.error(error);
    return resp.status(500).json({ error: "Internal Server Error" });
  }
});


app.post('/add-product', async (req, resp) => {
  let product = new addProduct(req.body);
  let result = await product.save();
  resp.send(result)
})

app.get('/products', async (req, resp) => {
  let products = await addProduct.find();
  if (products.length > 0) {
    resp.send(products)
  } else {
    resp.send({ result: "No Product Found" })
  }
})

app.delete('/products/:id', async (req, resp) => {
  const result = await addProduct.deleteOne({ _id: req.params.id });
  resp.send(result);
})

app.get('/products/:id', async (req, resp) => {
  let result = await addProduct.findOne({ _id: req.params.id });
  if (result) {
    resp.send({ result });
  } else {
    resp.send({ result: "No Record Found" });
  }
}, []);

app.put('/products/:id', async (req, resp) => {
  let result = await addProduct.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});


app.get('/search/:key', async (req, resp) => {
  let result = await addProduct.find({
    "$or": [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } }
    ]
  });
  resp.send(result);
});
app.listen(5000, () => {
  console.log("App Successfully Running on Port 3000");
});
