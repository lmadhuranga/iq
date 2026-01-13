Here’s a **clean, interview-ready MongoDB Cheat Sheet** 🚀
(Perfect for **quick revision + real-world usage**)

---

# 🧠 MongoDB Cheat Sheet (Beginner → Advanced)

---

## 1️⃣ MongoDB Basics

| Concept    | Meaning                   |
| ---------- | ------------------------- |
| Database   | Container for collections |
| Collection | Group of documents        |
| Document   | JSON-like record (BSON)   |
| `_id`      | Primary key (ObjectId)    |

```js
show dbs
use appdb
show collections
```

---

## 2️⃣ CRUD Operations

### Insert

```js
db.users.insertOne({ name: "Manisha", age: 28 })
db.users.insertMany([{ name: "A" }, { name: "B" }])
```

### Read

```js
db.users.find()
db.users.findOne({ name: "Manisha" })
```

### Update

```js
db.users.updateOne(
  { name: "Manisha" },
  { $set: { age: 29 } }
)
```

### Delete

```js
db.users.deleteOne({ name: "Manisha" })
```

---

## 3️⃣ Schema Design Patterns

### Embedded (Read-Heavy)

```json
{
  "user": "Manisha",
  "orders": [{ "id": 1, "amount": 500 }]
}
```

### Referenced (Large / Scalable)

```json
{ "_id": 1, "name": "Manisha" }
{ "orderId": 1, "userId": 1 }
```

📌 Rule:

> Embed for **fast reads**, Reference for **large growth**

---

## 4️⃣ Indexes (VERY IMPORTANT)

### Single Field

```js
db.users.createIndex({ email: 1 })
```

### Compound Index

```js
db.orders.createIndex({ userId: 1, createdAt: -1 })
```

### Unique Index

```js
db.users.createIndex({ email: 1 }, { unique: true })
```

### TTL Index

```js
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 }
)
```

📌 TTL uses:

* Sessions
* OTP
* Logs
* Tokens

---

## 5️⃣ Query Optimization

### Explain Query

```js
db.users.find({ age: { $gt: 25 } }).explain("executionStats")
```

Check:

* `COLLSCAN` ❌
* `IXSCAN` ✅

### Projection

```js
db.users.find({}, { name: 1, email: 1 })
```

### Pagination (Good)

```js
db.posts.find({ _id: { $gt: lastId } }).limit(10)
```

🚫 Avoid:

```js
db.posts.find().skip(10000)
```

---

## 6️⃣ Aggregation Pipeline

### Basic Flow

```js
db.orders.aggregate([
  { $match: { status: "PAID" } },
  { $group: { _id: "$userId", total: { $sum: "$amount" } } }
])
```

### Common Stages

| Stage      | Use          |
| ---------- | ------------ |
| `$match`   | Filter       |
| `$group`   | Aggregation  |
| `$project` | Shape output |
| `$sort`    | Order        |
| `$lookup`  | Join         |
| `$limit`   | Limit        |

---

## 7️⃣ Relationships in MongoDB

### One-to-Many (Reference)

```json
{ "_id": 1, "name": "User" }
{ "userId": 1, "order": "ABC" }
```

### Many-to-Many

```json
{ "studentId": 1, "courseId": 10 }
```

---

## 8️⃣ Transactions

```js
const session = db.getMongo().startSession();

session.startTransaction();

db.accounts.updateOne(
  { _id: 1 },
  { $inc: { balance: -500 } },
  { session }
);

session.commitTransaction();
```

📌 Requires:

* Replica set
* WiredTiger engine

---

## 9️⃣ MongoDB vs SQL (Quick)

| SQL          | MongoDB             |
| ------------ | ------------------- |
| Tables       | Collections         |
| Rows         | Documents           |
| JOIN         | `$lookup`           |
| Fixed Schema | Flexible Schema     |
| ACID         | ACID (Transactions) |

---

## 🔟 Performance Best Practices

✅ Index frequently queried fields
✅ Use projection
✅ Avoid large documents
✅ Avoid `$regex` on large collections
✅ Use bulk operations
✅ Monitor with `explain()`

---

## 🔥 Interview One-Liners

* “MongoDB schema design is **query-driven**”
* “Compound index order matters”
* “TTL indexes auto-expire data”
* “Explain plan prevents full collection scan”
* “Embedding improves read performance”

---

## 🧪 Production Use Cases

| Feature      | Use           |
| ------------ | ------------- |
| TTL Index    | Sessions, OTP |
| Aggregation  | Reports       |
| Transactions | Payments      |
| Sharding     | Large scale   |
| Indexing     | Performance   |

---

## 📌 Want More?

I can give you:

* 🧠 **MongoDB interview Q&A**
* 🧾 **Real fintech / e-commerce schema**
* 🧩 **MongoDB vs PostgreSQL deep comparison**
* 📊 **Indexes & aggregation practice problems**

Just say the word 👍
