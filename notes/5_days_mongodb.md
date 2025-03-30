### **5-Day MongoDB Core Database Teaching Plan**

---

## **Day 1: Introduction to NoSQL & MongoDB**
### **Topics Covered:**
✅ **What is NoSQL?**  
   - NoSQL stands for "Not Only SQL"  
   - Designed for scalability, flexibility, and high availability  
   - Document-oriented, key-value, wide-column, and graph databases  

✅ **NoSQL vs SQL**  
   | Feature       | SQL (Relational) | NoSQL (MongoDB - Document-Based) |
   |--------------|----------------|----------------------------------|
   | Data Storage | Tables & Rows   | Collections & Documents         |
   | Schema       | Fixed Schema    | Schema-less (Flexible)          |
   | Scaling      | Vertical        | Horizontal                      |
   | Joins        | Uses Joins      | Uses Embedded Documents         |

✅ **Why MongoDB?**  
   - Flexible schema  
   - JSON-like documents (BSON)  
   - Scalable and high performance  

✅ **Installing MongoDB**
   - MongoDB installation for Windows, macOS, Linux
   - Starting and stopping MongoDB server

✅ **MongoDB Tools Overview**
   - **MongoDB Shell (`mongosh`)** – CLI for running MongoDB commands  
   - **MongoDB Compass** – GUI tool for managing databases  
   - **MongoDB Atlas** – Cloud-based MongoDB  

✅ **Hands-On:**
   - Install MongoDB & Compass  
   - Start MongoDB server (`mongod`)  
   - Connect using `mongosh`  

---

## **Day 2: Working with MongoDB Shell & Compass**
### **Topics Covered:**
✅ **MongoDB Shell Commands**  
   - Connecting to MongoDB: `mongosh`  
   - Listing databases: `show dbs`  
   - Switching database: `use myDatabase`  
   - Creating collections: `db.createCollection("users")`  
   - Listing collections: `show collections`  

✅ **CRUD Operations in MongoDB Shell**
   - **Insert Data**
     ```sh
     db.users.insertOne({ name: "Alice", age: 25 })
     db.users.insertMany([{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }])
     ```
   - **Read Data**
     ```sh
     db.users.find()
     db.users.findOne({ name: "Alice" })
     ```
   - **Update Data**
     ```sh
     db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } })
     db.users.updateMany({ age: { $lt: 30 } }, { $set: { status: "young" } })
     ```
   - **Delete Data**
     ```sh
     db.users.deleteOne({ name: "Alice" })
     db.users.deleteMany({ age: { $gt: 50 } })
     ```

✅ **Working with MongoDB Compass**
   - Connecting to a database  
   - Viewing collections & documents  
   - Running queries in Compass  

✅ **Hands-On:**  
   - Perform CRUD operations in **MongoDB Shell** and **Compass**  

---

## **Day 3: Advanced MongoDB Operations & Playgrounds**
### **Topics Covered:**
✅ **Indexing in MongoDB**  
   ```sh
   db.users.createIndex({ name: 1 }) // Ascending index
   db.users.getIndexes()
   db.users.dropIndex("name_1")
   ```
✅ **Aggregation Framework**
   ```sh
   db.users.aggregate([
       { $group: { _id: "$status", count: { $sum: 1 } } }
   ])
   ```
✅ **MongoDB Playgrounds (VS Code & Compass)**
   - Writing MongoDB scripts  
   - Running aggregation pipelines  

✅ **Transactions in MongoDB**  
   - Multi-document transactions  

✅ **Hands-On:**  
   - Create indexes, aggregation pipelines, and test them in MongoDB Compass  

---

## **Day 4: MongoDB with Node.js**
### **Topics Covered:**
✅ **Setting Up Node.js with MongoDB**
   - Install MongoDB Node.js driver:  
     ```sh
     npm install mongodb
     ```

✅ **Connecting to MongoDB with Node.js**
   ```js
   const { MongoClient } = require("mongodb");
   const client = new MongoClient("mongodb://localhost:27017");

   async function connectDB() {
       await client.connect();
       console.log("Connected to MongoDB");
   }

   connectDB();
   ```

✅ **CRUD Operations with Node.js**
   ```js
   async function insertUser() {
       const db = client.db("myDatabase");
       const users = db.collection("users");

       await users.insertOne({ name: "John", age: 25 });
       console.log("User Inserted");
   }
   insertUser();
   ```

✅ **Querying & Updating Data**
   ```js
   async function findUsers() {
       const db = client.db("myDatabase");
       const users = db.collection("users");

       const userList = await users.find({ age: { $gt: 20 } }).toArray();
       console.log(userList);
   }
   findUsers();
   ```

✅ **Hands-On:**  
   - Build a simple Node.js app to connect to MongoDB and perform CRUD operations  

---

## **Day 5: Building a Mini Project**
### **Topics Covered:**
✅ **Building a CRUD API with Node.js & Express**
   - Install Express:  
     ```sh
     npm install express mongodb
     ```
   - Create an Express server:
     ```js
     const express = require("express");
     const { MongoClient } = require("mongodb");

     const app = express();
     app.use(express.json());

     const client = new MongoClient("mongodb://localhost:27017");
     const db = client.db("myDatabase");
     const users = db.collection("users");

     app.get("/users", async (req, res) => {
         const userList = await users.find().toArray();
         res.json(userList);
     });

     app.listen(3000, () => console.log("Server running on port 3000"));
     ```

✅ **Deployment & Best Practices**
   - Deploy MongoDB on **MongoDB Atlas**  
   - Security best practices  
   - Indexing for performance optimization  

✅ **Hands-On:**  
   - Build and deploy a **REST API** using MongoDB and Node.js  

---

### **Final Notes**
By the end of **Day 5**, students should be able to:
✅ Understand **MongoDB fundamentals**  
✅ Perform **CRUD operations** in MongoDB Shell & Compass  
✅ Write **aggregation pipelines**  
✅ Use **MongoDB in Node.js applications**  
✅ Build and deploy a **basic MongoDB-based project**  

Would you like any modifications to the plan? 🚀