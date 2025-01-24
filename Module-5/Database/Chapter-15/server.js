const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const Database='StudyIn';
const Client=new MongoClient(url);


async function getdata(){

    let result= await Client.connect();
    let db=result.db(Database);
    let collection=db.collection('users');
    let resp=await collection.find({}).toArray();
    console.log(resp);
}
getdata()