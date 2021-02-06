// password and db
const stuff = require('./passwords.js');

const password = stuff.credentials;
const database = stuff.source;

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://admin:${password}@cluster0.lwwzv.mongodb.net/${database}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { poolSize: 100, useUnifiedTopology: true, useNewUrlParser: true });



async function run() {
    try {
        await client.connect();
        const database = client.db(database);
        const collection = database.collection('user1');
        // Query for the names
        const query = { name: {first_name: 'Bob' }};
        const name = await collection.find(query);
        const data = await name.forEach(console.dir);
    }
    catch(err){
        console.log(err.stack); 
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        console.log("Server closed.")
    }
}
run().catch(console.dir);