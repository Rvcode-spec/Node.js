const dbConnect = require('./mongodb')

 async function Update() {
    const db = await dbConnect();
    const result = await db.updataOne({name:"Ravi"},{emailid: "bholasingh@gmail.com"})

    
    
    
}