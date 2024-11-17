
const mongoose=require('mongoose');

// Locial database
// mongoose.connect('mongodb://127.0.0.1:27017/mytestdb');

// Atlas detabase

mongoose.connect("mongodb+srv://civilstudy2024:Ravi123@mydata1.kzn8e.mongodb.net/?retryWrites=true&w=majority&appName=Mydata1")
.then(() => console.log("Database connected successfully"

))
.catch(err => console.error("Database connection error:", err));

const db=mongoose.connection;

// db.on("error",function(err){
//     console.log("test error")
//     console.log(err)
// })

// db.on("open",function(){
//     console.log("connect mongodb ")
// })

module.exports=db;
