const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017';
const Database = 'StudyIn';
const Client = new MongoClient(url);

async function dbConnect(){

    let result = await Client.connect();
    db= result.db(Database);
    return db.collection('users')
}

module.exports = dbConnect;