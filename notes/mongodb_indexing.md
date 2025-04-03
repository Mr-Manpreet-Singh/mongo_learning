### **MongoDB Indexing in Node.js**

#### **What is Indexing in MongoDB?**
Indexing in MongoDB is a mechanism that improves the performance of queries by allowing the database to find and retrieve specific documents faster. By default, MongoDB creates an index on the `_id` field. However, you can create additional indexes to optimize query performance.

---

### **Step-by-Step Implementation in Node.js**

#### **1. Setup and Insert Dummy Data**
We'll first connect to MongoDB and insert some dummy data.

```javascript
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db("testDB");
        const collection = database.collection("users");

        // Insert Dummy Data
        await collection.insertMany([
            { name: "Alice", age: 25, city: "New York" },
            { name: "Bob", age: 30, city: "Los Angeles" },
            { name: "Charlie", age: 35, city: "Chicago" },
            { name: "David", age: 40, city: "Houston" },
            { name: "Eve", age: 45, city: "San Francisco" }
        ]);

        console.log("Dummy data inserted!");
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
```

---

#### **2. Query Data Without Index**
Now, we'll query the database to find users in a specific city **without an index**.

```javascript
async function findUsersWithoutIndex() {
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("users");

    // Find users in 'Chicago'
    const result = await collection.find({ city: "Chicago" }).toArray();
    console.log("Users found:", result);

    // Explain the query execution
    const explainResult = await collection.find({ city: "Chicago" }).explain("executionStats");
    console.log("Query Execution Stats (Without Index):", explainResult.executionStats);

    await client.close();
}

findUsersWithoutIndex().catch(console.dir);
```

🔴 **Issue**: Since no index is present on the `city` field, MongoDB will perform a **collection scan**, meaning it will check each document one by one.

---

#### **3. Create an Index on the `city` Field**
To speed up queries, we create an index on the `city` field.

```javascript
async function createIndex() {
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("users");

    // Create an index on the 'city' field
    await collection.createIndex({ city: 1 });

    console.log("Index created on 'city' field");

    await client.close();
}

createIndex().catch(console.dir);
```

📌 **Now, MongoDB will use this index to efficiently find documents instead of scanning the entire collection.**

---

#### **4. Query Data With Index**
Let's run the same query and check how MongoDB optimizes it.

```javascript
async function findUsersWithIndex() {
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("users");

    // Find users in 'Chicago'
    const result = await collection.find({ city: "Chicago" }).toArray();
    console.log("Users found:", result);

    // Explain the query execution
    const explainResult = await collection.find({ city: "Chicago" }).explain("executionStats");
    console.log("Query Execution Stats (With Index):", explainResult.executionStats);

    await client.close();
}

findUsersWithIndex().catch(console.dir);
```

---

### **Comparing Query Execution**
After running the `.explain("executionStats")`, compare the results:

1. **Without Index:**  
   - `"executionStages.stage": "COLLSCAN"` (Collection scan)
   - `"nReturned"` is the number of matching documents.
   - `"totalKeysExamined"` is `0` because no index was used.
   - `"totalDocsExamined"` is the total number of documents in the collection.

2. **With Index:**  
   - `"executionStages.stage": "IXSCAN"` (Index scan)
   - `"totalKeysExamined"` is the number of keys examined in the index.
   - `"totalDocsExamined"` is much smaller than before.

---

### **Key Takeaways**
✅ Indexing significantly speeds up queries by reducing the number of documents MongoDB has to scan.  
✅ Use `.explain("executionStats")` to analyze query performance before and after indexing.  
✅ Create indexes on fields that are frequently queried (`find`, `sort`, `aggregate`, etc.).  

Would you like an example of a **compound index** (index on multiple fields) as well? 🚀
