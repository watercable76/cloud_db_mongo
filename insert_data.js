const MongoClient = require('mongodb').MongoClient;
// var password = prompt("Please enter the password: ");
// var database = prompt("Please enter the db name: ");

const uri = `mongodb+srv://admin:${password}@cluster0.lwwzv.mongodb.net/${database}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });


// need at least 10 people in db.
// 3 from rexburg
// 3 engineers
// at least 2 retired
// general mix of male and female

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db('transaction_db');
        const col = db.collection('user1');

        let person1 = {
              "name": { "first": "Bob", "last": "Smith" }
            , "age": 44
            , "gender": "male"
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

        let person2 = {
              "name": { "first": "Mary", "middle": "Joe", "last": "Olson" }
            , "age": 27
            , "gender": "female"
            , "ocupation": "Accountant"
            , "pay": 73000
            , "address": {
                "city": "Ketchikan"
              , "state": "Washington"
            }
        }

        let person3 = {
              "name": { "first": "Harry", "last": "Espalda" }
            , "age": 75
            , "gender": "male"
            , "ocupation": "Police"
            , "pay": 120000
            , "address": {
                  "city": "Salt Lake City"
                , "state": "Utah"
                , "home": {
                    "street": "100 N 200 W"
                    , "number": 223
                }
            }
            , "retired": true
        }

        let person4 = {
              "name": { "first": "Lucy", "last": "Smith" }
            , "age": 52
            , "gender": "female"
            , "ocupation": "Engineer"
            , "pay": 250000
            , "address": {
                  "city": "Rexburg"
                , "state": "Idaho"
                , "home": {
                    "street": "Howard Way"
                    , "number": 1870
                }
            }
        }

        let person5 = {
              "name": { "first": "Bob", "last": "Smith" }
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
    } catch (err) {
        console.log(err.stack);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        console.log("Server is closed.");
    }
}
run().catch(console.dir);
