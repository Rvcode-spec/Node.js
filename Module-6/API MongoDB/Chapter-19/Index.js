const dbConnect = require('./mongodb')


async function main() {

    let data = await dbConnect()
    data = await data.find().toArray()
    console.log(data);
    
    
}
main()