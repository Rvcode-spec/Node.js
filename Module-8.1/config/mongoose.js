

const mongoose =require('mongoose')

mongoose.connect("mongodb+srv://civilstudy2024:Ravi123@mydata1.kzn8e.mongodb.net/?retryWrites=true&w=majority&appName=Mydata1")
.then(() => console.log("Database connected successfully"

))
.catch(err => console.error("Database connection error:", err));


const db=mongoose.connection;


module.exports=db;