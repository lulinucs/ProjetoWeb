const {MongoClient} = require('mongodb');
const DB_NAME = 'teste-db';
const MONGO_URL = 'mongodb://0.0.0.0/27017/${DB_NAME}';
var client = new MongoClient(MONGO_URL, {useUnifiedTopology: true});

async function connectDB() {
    try {
        const res = await client.connect();
        console.log("Conectado")
    } catch (e) {
        console.error("erro: "+e)
    }

}
connectDB();
const collection = client.db('teste-db').collection('users');