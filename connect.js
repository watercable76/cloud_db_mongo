
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:cLoud_management2021@cluster0.lwwzv.mongodb.net/transaction_db?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });



async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        console.log("Server closed.")
    }
}
run().catch(console.dir);

