const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://admin:<password>@cluster0.lwwzv.mongodb.net/<db>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
async function run() {
    try {
        await client.connect();
        const database = client.db('<db>');
        const collection = database.collection('names');
        // Query for the names
        const query = { first_name: 'Bob' };
        const name = await collection.findOne(query);
        console.log(name);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);