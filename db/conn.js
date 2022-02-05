const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/testemongo"

const client = new MongoClient(uri)

async function run(){
    try {
        await client.connect()
        console.log("Connected in Mongodb")
    } catch (error) {
        console.log(error);
    }
}

run()

module.exports = client 