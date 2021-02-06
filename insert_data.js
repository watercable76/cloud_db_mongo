// password and db
const stuff = require('./passwords.js');

const password = stuff.credentials;
const database = stuff.source;

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://admin:${password}@cluster0.lwwzv.mongodb.net/${database}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { poolSize: 100, useUnifiedTopology: true, useNewUrlParser: true });


// need at least 5 people in db.
// 3 from rexburg
// 3 engineers
// at least 2 retired
// general mix of male and female

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(database);
    const col = db.collection('user1');

    let people = [{
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
    },

    {
      "name": { "first": "Mary", "middle": "Joe", "last": "Olson" }
      , "age": 27
      , "gender": "female"
      , "ocupation": "Accountant"
      , "pay": 73000
      , "address": {
        "city": "Ketchikan"
        , "state": "Washington"
      }
    },

    {
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
    },

    {
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
    },

    {
      "name": { "first": "Jerry", "last": "Speed" }
      , "age": 21
      , "ocupation": "Student"
      , "pay": 25000
      , "address": {
        "city": "Salt Lake City"
        , "state": "Utah"
      }
    }
    ];

    const result = await col.insertMany(people);
    console.log(result.insertedCount + ' tables inserted into the database.');

  } catch (err) {
    console.log(err.stack);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log("Server is closed.");
  }
}
run().catch(console.dir);
