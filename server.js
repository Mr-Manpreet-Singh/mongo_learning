const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("myDatabase");
        const collection = db.collection("myCollection");

        await collection.insertOne({ name: "John", age: 25 });
        console.log("Document inserted");

        const docs = await collection.find().toArray();
        console.log("All Documents:", docs);

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
        console.log("Connection closed");
    }
}

main();