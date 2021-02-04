const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:cLoud_management2021@cluster0.lwwzv.mongodb.net/sample_analytics?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });


async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db('transaction_db');
        const col = db.collection('user1');

        // query for person 'Bob'
        console.log("Looking for Bob!");
        // const query = {"name": {"first": "Bob"}};
        const query = {"age": 44};
        // project let's you specify which items to not include
        // 1 for true and 0 for false?
        const cursor = col.find(query).project({_id: 0});

        const data = await cursor.forEach(console.dir);

    } catch(err){
        console.log(err.stack);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        console.log("Server is now closed.");
    }
}
run().catch(console.dir);
