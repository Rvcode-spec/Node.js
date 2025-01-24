const dbConnect = require('./mongodb')

const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    
}

main()

// Second stp 

// dbConnect().then((resp)=>{  // Connect with pormmies
//     resp.find().toArray().then((data)=>{
//         console.log(data);  
//     })
// })

