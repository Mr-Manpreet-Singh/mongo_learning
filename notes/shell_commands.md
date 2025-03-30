Here are some of the most commonly used **MongoDB shell** (`mongosh`) commands:

### **1. Connecting to MongoDB**
```sh
mongosh
```
- Connects to the default MongoDB instance (`localhost:27017`).

```sh
mongosh "mongodb://username:password@host:port/database"
```
- Connects to a specific MongoDB instance with authentication.

---

### **2. Database Commands**
```sh
show dbs
```
- Lists all databases.

```sh
use myDatabase
```
- Switches to (or creates) a database.

```sh
db
```
- Displays the current database.

```sh
db.dropDatabase()
```
- Deletes the current database.

---

### **3. Collection Commands**
```sh
show collections
```
- Lists all collections in the current database.

```sh
db.createCollection("myCollection")
```
- Creates a new collection.

```sh
db.myCollection.drop()
```
- Deletes a collection.

---

### **4. CRUD Operations**
#### **Insert Data**
```sh
db.myCollection.insertOne({ name: "John", age: 25 })
```
- Inserts a single document.

```sh
db.myCollection.insertMany([{ name: "Alice" }, { name: "Bob" }])
```
- Inserts multiple documents.

#### **Read Data**
```sh
db.myCollection.find()
```
- Fetches all documents.

```sh
db.myCollection.find().pretty()
```
- Displays documents in a formatted way.

```sh
db.myCollection.findOne({ name: "John" })
```
- Fetches a single document that matches the query.

#### **Update Data**
```sh
db.myCollection.updateOne({ name: "John" }, { $set: { age: 30 } })
```
- Updates a single document.

```sh
db.myCollection.updateMany({ age: { $lt: 30 } }, { $set: { status: "young" } })
```
- Updates multiple documents.

#### **Delete Data**
```sh
db.myCollection.deleteOne({ name: "John" })
```
- Deletes a single document.

```sh
db.myCollection.deleteMany({ age: { $gt: 50 } })
```
- Deletes multiple documents.

---

### **5. Indexing**
```sh
db.myCollection.createIndex({ name: 1 })
```
- Creates an ascending index on the `name` field.

```sh
db.myCollection.getIndexes()
```
- Lists all indexes.

```sh
db.myCollection.dropIndex("name_1")
```
- Deletes an index.

---

### **6. Aggregation**
```sh
db.myCollection.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } }
])
```
- Groups documents by `status` and counts them.

---

### **7. Admin Commands**
```sh
db.stats()
```
- Displays database statistics.

```sh
db.serverStatus()
```
- Shows server information.

```sh
db.currentOp()
```
- Lists running operations.

```sh
db.killOp(opid)
```
- Kills a running operation.

```sh
exit
```
- Exits the MongoDB shell.

Let me know if you need more details! 🚀