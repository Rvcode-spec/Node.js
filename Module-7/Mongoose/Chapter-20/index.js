const mongoose = require('mongoose');


const  main= async ()=>{
    await mongoose.connect("mongodb://localhost:27017/StudyIn");
    const UserSchema = new mongoose.Schema(
        {
            name:String,
            emailID:String,
            mobile : Number
    });

    const UserModel = mongoose.model("users", UserSchema);
    let data = new UserModel({name : "Sohan Singh", emailID: "Sohansingh@gmail.com", mobile: "9874647467"})
    let result = await data.save();
    console.log(result);
}

main();