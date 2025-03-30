Here are **more code snippets** on **aggregation, indexing, and fetching data** in MongoDB.

---

## **1. Aggregation Framework (Advanced Queries)**

### **1.1 Basic Aggregation Example (Grouping & Counting)**
Find the total number of users in each `status` group:
```js
db.users.aggregate([
    { $group: { _id: "$status", count: { $sum: 1 } } }
]);
```
🔹 **Output:**
```json
[
    { "_id": "active", "count": 5 },
    { "_id": "inactive", "count": 3 }
]
```

---

### **1.2 Aggregation with Filtering (`$match`)**
Find users **older than 25** and **group by status**:
```js
db.users.aggregate([
    { $match: { age: { $gt: 25 } } },
    { $group: { _id: "$status", totalUsers: { $sum: 1 } } }
]);
```

---

### **1.3 Project Specific Fields (`$project`)**
Only return **name and age**, and rename `age` to `userAge`:
```js
db.users.aggregate([
    { $project: { _id: 0, name: 1, userAge: "$age" } }
]);
```
🔹 **Output:**
```json
[
    { "name": "Alice", "userAge": 30 },
    { "name": "Bob", "userAge": 25 }
]
```

---

### **1.4 Sorting (`$sort`)**
Sort users by `age` in **descending order**:
```js
db.users.aggregate([
    { $sort: { age: -1 } } // -1 for descending, 1 for ascending
]);
```

---

### **1.5 Limiting Results (`$limit`)**
Get **top 5 oldest users**:
```js
db.users.aggregate([
    { $sort: { age: -1 } },
    { $limit: 5 }
]);
```

---

### **1.6 Joining Collections (`$lookup`)**
Join `users` collection with `orders` collection where `userId` matches `_id`:
```js
db.users.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "userId",
            as: "userOrders"
        }
    }
]);
```
🔹 **Output:**
```json
[
    { "_id": 1, "name": "Alice", "userOrders": [{ "orderId": 101, "amount": 200 }] }
]
```

---

### **1.7 Unwinding Arrays (`$unwind`)**
Flatten the `hobbies` array into separate documents:
```js
db.users.aggregate([
    { $unwind: "$hobbies" }
]);
```
🔹 **Before:**
```json
{ "_id": 1, "name": "Alice", "hobbies": ["reading", "traveling"] }
```
🔹 **After:**
```json
{ "_id": 1, "name": "Alice", "hobbies": "reading" }
{ "_id": 1, "name": "Alice", "hobbies": "traveling" }
```

---

## **2. Indexing for Performance**

### **2.1 Create an Index**
Create an index on the `name` field for **faster searches**:
```js
db.users.createIndex({ name: 1 });
```
🔹 **1** = Ascending Order  
🔹 **-1** = Descending Order  

---

### **2.2 Compound Index (Multiple Fields)**
Optimize searches that use `name` and `age`:
```js
db.users.createIndex({ name: 1, age: -1 });
```

---

### **2.3 Unique Index**
Ensure that emails are **unique**:
```js
db.users.createIndex({ email: 1 }, { unique: true });
```

---

### **2.4 Checking Indexes**
List all indexes on `users` collection:
```js
db.users.getIndexes();
```

---

### **2.5 Dropping an Index**
Remove index on `name`:
```js
db.users.dropIndex("name_1");
```

---

## **3. Fetching Data with Queries**

### **3.1 Find All Documents**
```js
db.users.find();
```

---

### **3.2 Find with Conditions**
Find all users **older than 25**:
```js
db.users.find({ age: { $gt: 25 } });
```

Find users **aged between 20 and 30**:
```js
db.users.find({ age: { $gte: 20, $lte: 30 } });
```

---

### **3.3 Find Specific Fields**
Return only `name` and `age` (hide `_id`):
```js
db.users.find({}, { _id: 0, name: 1, age: 1 });
```

---

### **3.4 Sorting Results**
Sort users by `age` in descending order:
```js
db.users.find().sort({ age: -1 });
```

---

### **3.5 Find with Limit & Skip**
Get **first 5 users**, skipping the first 2:
```js
db.users.find().skip(2).limit(5);
```

---

### **3.6 Using Regular Expressions**
Find users whose names start with **"A"**:
```js
db.users.find({ name: /^A/ });
```

---

### **3.7 Find Inside an Array**
Find users who have `"reading"` as a hobby:
```js
db.users.find({ hobbies: "reading" });
```

Find users who have **both "reading" and "sports"**:
```js
db.users.find({ hobbies: { $all: ["reading", "sports"] } });
```

---

### **3.8 Find Users with a Specific Field**
Find users **without an email field**:
```js
db.users.find({ email: { $exists: false } });
```

Find users where `email` is **not null**:
```js
db.users.find({ email: { $ne: null } });
```

---

## **4. Advanced Queries in Node.js**

### **4.1 Aggregation in Node.js**
```js
async function aggregateUsers() {
    const users = db.collection("users");
    const result = await users.aggregate([
        { $match: { age: { $gt: 25 } } },
        { $group: { _id: "$status", total: { $sum: 1 } } }
    ]).toArray();

    console.log(result);
}
```

---

### **4.2 Indexing in Node.js**
```js
async function createIndex() {
    const users = db.collection("users");
    await users.createIndex({ name: 1 });
    console.log("Index created");
}
```

---

### **4.3 Fetch Data with Sorting**
```js
async function getSortedUsers() {
    const users = db.collection("users");
    const result = await users.find().sort({ age: -1 }).toArray();
    console.log(result);
}
```

---

### **Summary**
✅ **Aggregation** (`$match`, `$group`, `$project`, `$lookup`, `$unwind`)  
✅ **Indexing** (Single, Compound, Unique, Dropping)  
✅ **Fetching Data** (Sorting, Filtering, Limiting, Regular Expressions)  
✅ **Using MongoDB with Node.js**  

Would you like more real-world examples? 🚀