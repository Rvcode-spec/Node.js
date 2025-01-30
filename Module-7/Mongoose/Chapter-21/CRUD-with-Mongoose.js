const mongoose = require('mongoose')

 mongoose.connect("mongodb://localhost:27017/StudyIn");
    
        const UserSchema = new mongoose.Schema(
            {
                name:String,
                emailID:String,
                mobile : Number
        });

        const SaveinDB = async ()=>{
           const users = mongoose.model('users', UserSchema);
            let data = new users({name:"Aarti", emailID: "aarti@gmail.com", mobile:"987654356"})
            let result = await data.save()
            console.log(result);

        }

    
    const UpdateInDB = async ()=>{
        const users = mongoose.model('users', UserSchema); 
        let data = await users.updateOne({name:"Sohan Singh"}, {$set:{emailID:"sohansingh@gmail.com"}})
        console.log(data);
        

    }
    
    const deleteInDB = async () => {
        const users = mongoose.model('users', UserSchema);
        let data = await users.deleteOne({ name: "Sohan Singh" });
    
        if (data.deletedCount > 0) {
            console.log("User deleted successfully");
        } else {
            console.log("User not found");
        }
    };

    const findInDB = async () =>{
        const users = mongoose.model('users', UserSchema)
        let data = await users.find({name:'Suknyaa Singh'})
        console.log(data);
        
    }
    findInDB()
    
    // deleteInDB();
       