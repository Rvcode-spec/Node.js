const dbConnect = require('./mongodb')

const insert = async ()=>{
    const db= await dbConnect();
    const result = await db.insertOne([
        {

            name: 'Ravi Shankar Singh ',
            emailId:'ravishankarsingh@gmail.com',
            phone:'9876467865',
        },

        // {
        //         name: 'Vinod Kumar',
        //         emailId:'vinodkumer@gmail.com'
        // }
    ]);


    if(result.acknowledged){
        console.log('Data set');
        
    }

    // console.log(result);
    
}
insert();

