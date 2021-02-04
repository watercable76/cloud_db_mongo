// copied code from insert_data.js file. Modify to 
// delete records

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:cLoud_management2021@cluster0.lwwzv.mongodb.net/sample_analytics?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });


async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db('transaction_db');
        const col = db.collection('user1');

        let person1 = {
             "name": {"first": "Bob", "last": "Smith"}
           , "age": 44
           , "ocupation": "Engineer"
           , "pay": 150000
           , "address": {
                "city": "Rexburg"
              , "state": "Idaho"
              , "home": {
                  "street": "Jackson Ln"
                , "number": 175
                }
            }
        }

        const p = await col.insertOne(person1);

        const myDoc = await col.findOne();
        console.log(myDoc);
    } catch(err){
        console.log(err.stack);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        console.log("Server is closed.");
    }
}
run().catch(console.dir);
