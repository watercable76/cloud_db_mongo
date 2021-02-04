
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:cLoud_management2021@cluster0.lwwzv.mongodb.net/sample_analytics?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });


async function run() {
    try {
        await client.connect();
        const collection = client.db("sample_analytics").collection("accounts");
        // perform actions on the collection object
        const query = { account_id: 557378 };
        const results = await collection.findOne(query);
        console.log(results);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

// client.connect(err => {
//   const collection = client.db("sample_analytics").collection("accounts");
//   // perform actions on the collection object
//   const query = {account_id: 557378};
//   const results = await collection.findOne(query);
//   console.log(results);
//   client.close();
// });
