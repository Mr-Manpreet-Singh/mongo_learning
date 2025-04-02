Here's a well-structured **MongoDB CRUD Assignment** that covers all operations step by step. This will help your students practice connecting to MongoDB, creating a database, adding collections, inserting data (single & multiple), updating data, querying with conditions (`$gt`, `$lt`, `$in`, etc.), and deleting data.  

---

# **MongoDB CRUD Assignment**

## **Objective**  
Students will practice MongoDB operations using Node.js. The assignment covers:  
✅ Connecting to MongoDB  
✅ Creating a database  
✅ Creating collections  
✅ Inserting documents (single & multiple)  
✅ Querying documents (all, by condition)  
✅ Updating documents  
✅ Deleting documents  

---

## **Instructions**  
- Write a **Node.js script** to perform the following MongoDB operations.
- Use the **MongoDB Node.js driver** to connect to MongoDB.
- Implement **all CRUD operations** step by step.
- Ensure that you properly **log all operations**.

---

## **Part 1: Setup**  
1. Install MongoDB and ensure it is running on `localhost:27017`.  
2. Install the required MongoDB package:  
   ```sh
   npm install mongodb
   ```
3. Create a new Node.js script (`assignment.js`) and **import MongoDB**:
   ```js
   const { MongoClient } = require("mongodb");
   ```

---

## **Part 2: Connecting to MongoDB**
- Establish a connection with `mongodb://localhost:27017`
- Print **"Connected to MongoDB"** upon successful connection.
- Use `mySchool` as the **database name**.

---

## **Part 3: Creating Collections**
- Create **two collections** inside `mySchool`:
  1. `students`
  2. `courses`

---

## **Part 4: Inserting Documents**
### ✅ Insert One Document (Single Entry)
- Insert a **single student** into the `students` collection. Example:
  ```json
  {
    "name": "Alice",
    "age": 20,
    "grade": "A",
    "city": "New York"
  }
  ```

### ✅ Insert Many Documents (Multiple Entries)
- Insert **multiple students** at once into `students` collection:
  ```json
  [
    { "name": "Bob", "age": 22, "grade": "B", "city": "Chicago" },
    { "name": "Charlie", "age": 19, "grade": "C", "city": "Los Angeles" },
    { "name": "David", "age": 21, "grade": "A", "city": "Miami" }
  ]
  ```
- Log `"Inserted multiple students"`.

### ✅ Insert Courses Collection
- Add multiple courses to `courses`:
  ```json
  [
    { "courseName": "Math", "duration": "3 Months", "fees": 300 },
    { "courseName": "Science", "duration": "4 Months", "fees": 400 }
  ]
  ```
- Log `"Inserted multiple courses"`.

---

## **Part 5: Fetching Documents**
### ✅ Fetch All Students
- Retrieve **all documents** from `students` and print them.

### ✅ Fetch Students Based on Condition
- Find all students **older than 20**.
- Find students **with grade "A"**.
- Find students **from "New York" or "Chicago"**.

### ✅ Fetch Courses Based on Fees
- Retrieve all courses with **fees greater than 350**.

---

## **Part 6: Updating Documents**
### ✅ Update One Document
- Change `"Alice"`'s age to **21**.

### ✅ Update Many Documents
- Increase the **fees of all courses by 10%**.

---

## **Part 7: Deleting Documents**
### ✅ Delete One Document
- Remove **one student** from `students`.

### ✅ Delete Many Documents
- Remove all students **older than 22**.

---

## **Part 8: Closing the Connection**
- Ensure to close the database connection after operations.

---

## **Bonus (Optional)**
- Sort students by **age (ascending)**.
- Count how many students are from `"Chicago"`.

---

## **Submission Instructions**
1. Complete the assignment in `assignment.js`.
2. Push the code to GitHub (if applicable).
3. Share the GitHub repository link.

---

## **Expected Output Example**
```sh
Connected to MongoDB
Inserted one student: Alice
Inserted multiple students
Inserted multiple courses
All Students: [{...}, {...}, {...}]
Students older than 20: [{...}]
Students with grade "A": [{...}]
Updated Alice's age
Increased course fees
Deleted one student
Deleted students older than 22
Connection closed
```

---

## **Teacher's Note**  
- This assignment ensures students practice CRUD operations thoroughly.
- They should handle errors using `try...catch`.
- Encourage them to **modularize** functions for readability.
- This mirrors **real-world MongoDB database interactions**.

Would you like me to add a **template code** for students to fill in? 🚀
