Below is a **clear, interview-ready deep explanation of TypeORM relations**
👉 **Only text + code | Simple → Advanced | Real-world examples**

---

## **7️⃣ What are Relations (TypeORM)?**

**Relations** define how **database tables are connected** using foreign keys and join tables.

In TypeORM, relations are declared using **decorators**.

---

## **1️⃣ OneToOne**

👉 One record is related to **exactly one** record.

### Example: User ↔ Profile

#### User Entity

```ts
@OneToOne(() => Profile, profile => profile.user)
@JoinColumn()
profile: Profile;
```

#### Profile Entity

```ts
@OneToOne(() => User, user => user.profile)
user: User;
```

📌 `@JoinColumn`

* Only **one side** owns the relation
* Creates the **foreign key**

---

## **2️⃣ OneToMany**

👉 One record relates to **multiple** records
⚠️ **Inverse side only** (no FK here)

### Example: User → Orders

#### User Entity

```ts
@OneToMany(() => Order, order => order.user)
orders: Order[];
```

---

## **3️⃣ ManyToOne**

👉 Many records relate to **one** record
✔ **Owning side**

### Example: Order → User

#### Order Entity

```ts
@ManyToOne(() => User, user => user.orders)
@JoinColumn({ name: "user_id" })
user: User;
```

📌 Database FK is created **here**

---

## 🔁 OneToMany + ManyToOne (Most Common Pattern)

```
User (1)  ←→  (N) Order
```

* `ManyToOne` → owns FK
* `OneToMany` → inverse mapping only

---

## **4️⃣ ManyToMany**

👉 Many records relate to **many** records
Uses a **join table**

### Example: User ↔ Role

#### User Entity

```ts
@ManyToMany(() => Role, role => role.users)
@JoinTable()
roles: Role[];
```

#### Role Entity

```ts
@ManyToMany(() => User, user => user.roles)
users: User[];
```

📌 `@JoinTable`

* Required on **one side only**
* Creates join table automatically

---

## 🧱 Generated Join Table (Example)

```
user_roles
-----------
user_id
role_id
```

---

## 🔥 Relation Options (VERY IMPORTANT)

### Cascade

```ts
@OneToMany(() => Order, o => o.user, { cascade: true })
```

✔ Saves child automatically
❌ Dangerous for deletes if misused

---

### Eager vs Lazy Loading

#### Eager

```ts
@ManyToOne(() => User, { eager: true })
user: User;
```

✔ Auto fetched
❌ Performance risk

#### Lazy

```ts
@ManyToOne(() => User)
user: Promise<User>;
```

✔ Loaded only when accessed

---

### onDelete

```ts
@ManyToOne(() => User, user => user.orders, {
  onDelete: "CASCADE"
})
user: User;
```

✔ Deletes dependent records

---

## 🧠 Fetching Relations

### Using `find`

```ts
this.userRepo.find({
  relations: ["orders"]
});
```

---

### Using QueryBuilder (Preferred)

```ts
this.userRepo
  .createQueryBuilder("user")
  .leftJoinAndSelect("user.orders", "order")
  .getMany();
```

✔ Better performance
✔ Fine-grained control

---

## ⚠️ Common Mistakes (Interview Traps)

❌ Putting `@JoinColumn` on `OneToMany`
❌ Expecting FK in `OneToMany`
❌ Using eager loading everywhere
❌ Forgetting inverse side mapping

---

## 🎯 Interview One-Liners

* **OneToOne** → One record maps to one
* **ManyToOne** → Owns the foreign key
* **OneToMany** → Inverse side only
* **ManyToMany** → Uses join table

---

## 🧠 Final Summary (Perfect Answer)

> **TypeORM relations define how entities are linked using foreign keys and join tables. ManyToOne owns the relationship, OneToMany is inverse, OneToOne connects single records, and ManyToMany uses a join table for bidirectional mapping.**

---

If you want next:

* Relation **cardinality traps**
* Soft delete + relations
* Transactions with relations
* Performance tuning for joins
* TypeORM vs Prisma relations

Just say **next** 🚀
