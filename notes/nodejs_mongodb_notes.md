Here are the **most commonly used MongoDB commands in Node.js** using the official **MongoDB Node.js Driver** (`mongodb` package):

---

### **1. Install MongoDB Node.js Driver**
```sh
npm install mongodb
```

---

### **2. Connecting to MongoDB**
```js
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Connection error:", error);
    }
}

connectDB();
```

---

### **3. Database Operations**
```js
const db = client.db("myDatabase");

// List all databases
async function listDatabases() {
    const databases = await client.db().admin().listDatabases();
    console.log("Databases:", databases.databases);
}

listDatabases();
```

---

### **4. Collection Operations**
```js
const collection = db.collection("myCollection");

// Create Collection (not required usually, MongoDB creates it automatically)
async function createCollection() {
    await db.createCollection("newCollection");
    console.log("Collection created");
}

// List all collections
async function listCollections() {
    const collections = await db.listCollections().toArray();
    console.log("Collections:", collections);
}
```

---

### **5. CRUD Operations**
#### **Insert Data**
```js
async function insertData() {
    await collection.insertOne({ name: "John", age: 25 });
    console.log("Document inserted");

    await collection.insertMany([{ name: "Alice" }, { name: "Bob" }]);
    console.log("Multiple documents inserted");
}
```

#### **Read Data**
```js
async function readData() {
    const allDocs = await collection.find().toArray();
    console.log("All Documents:", allDocs);

    const oneDoc = await collection.findOne({ name: "John" });
    console.log("Single Document:", oneDoc);
}
```

#### **Update Data**
```js
async function updateData() {
    await collection.updateOne({ name: "John" }, { $set: { age: 30 } });
    console.log("Document updated");

    await collection.updateMany({ age: { $lt: 30 } }, { $set: { status: "young" } });
    console.log("Multiple documents updated");
}
```

#### **Delete Data**
```js
async function deleteData() {
    await collection.deleteOne({ name: "John" });
    console.log("Document deleted");

    await collection.deleteMany({ age: { $gt: 50 } });
    console.log("Multiple documents deleted");
}
```

---

### **6. Indexing**
```js
async function manageIndexes() {
    await collection.createIndex({ name: 1 });
    console.log("Index created");

    const indexes = await collection.indexes();
    console.log("Indexes:", indexes);

    await collection.dropIndex("name_1");
    console.log("Index dropped");
}
```

---

### **7. Aggregation**
```js
async function aggregateData() {
    const result = await collection.aggregate([
        { $group: { _id: "$status", count: { $sum: 1 } } }
    ]).toArray();

    console.log("Aggregation Result:", result);
}
```

---

### **8. Admin & Server Commands**
```js
async function getDBStats() {
    const stats = await db.stats();
    console.log("Database Stats:", stats);

    const serverStatus = await db.admin().serverStatus();
    console.log("Server Status:", serverStatus);
}
```

---

### **9. Closing Connection**
```js
async function closeConnection() {
    await client.close();
    console.log("MongoDB connection closed");
}
```

---

### **Full Example**
```js
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
```

---

This should cover all the basic MongoDB operations using **Node.js**. Let me know if you need more details! 🚀