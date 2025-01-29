const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'StudyIn';
const Client = new MongoClient(url);

async function dbConnect() {
    let result = await Client.connect();
    const db = result.db(database);
    return db.collection('users');
}

module.exports = dbConnect;
