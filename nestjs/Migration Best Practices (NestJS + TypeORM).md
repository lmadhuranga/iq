Great question 👍
**Migration best practices** are **VERY IMPORTANT for interviews and real production systems**.

Below is a **clean, practical, NestJS + TypeORM–focused guide**.

---

# 🧬 Migration Best Practices (NestJS + TypeORM)

---

## 🔹 What is a Migration?

A **migration** is a **version-controlled DB schema change**:

* Create / alter tables
* Add / remove columns
* Create indexes
* Modify constraints

✔ Safe
✔ Trackable
✔ Rollback supported

---

## 🟢 1️⃣ NEVER Use `synchronize` in Production

```ts
// ❌ BAD
synchronize: true
```

```ts
// ✅ GOOD
synchronize: false
```

👉 Use migrations instead.

---

## 🟢 2️⃣ Always Generate Migrations (Don’t Write by Hand First)

```bash
npm run migration:generate -- src/migrations/AddUserEmail
```

✔ Reduces human error
✔ Matches entity changes exactly

---

## 🟢 3️⃣ Review Generated SQL Carefully ⚠️

Before running:

```bash
npm run migration:show
```

Check for:

* ❌ `DROP COLUMN`
* ❌ `DROP TABLE`
* ❌ Wrong data types

👉 **Generated ≠ Safe**

---

## 🟢 4️⃣ Make Migrations Small & Atomic

❌ Bad:

```text
AddUserEmailAndOrdersAndIndexes
```

✅ Good:

```text
AddUserEmail
CreateOrdersTable
AddUserIndexes
```

✔ Easier rollback
✔ Safer deploys

---

## 🟢 5️⃣ Always Add `down()` Method Properly

```ts
public async down(queryRunner: QueryRunner): Promise<void> {
  await queryRunner.dropColumn('user', 'email');
}
```

✔ Enables rollback
✔ Mandatory for production

---

## 🟢 6️⃣ NEVER Edit a Migration After It’s Run 🚨

❌ Bad:

* Editing migration already applied in prod

✅ Correct:

* Create **new migration**

```bash
AddUserPhoneFix
```

---

## 🟢 7️⃣ Use Explicit Column Types

❌ Bad:

```ts
@Column()
amount: number;
```

✅ Good:

```ts
@Column('decimal', { precision: 10, scale: 2 })
amount: number;
```

✔ Prevents DB mismatch
✔ Stable across environments

---

## 🟢 8️⃣ Handle Existing Data Safely

❌ Dangerous:

```ts
ADD COLUMN email VARCHAR(255) NOT NULL
```

✅ Safe:

```ts
ADD COLUMN email VARCHAR(255)
UPDATE user SET email = 'temp@mail.com'
ALTER COLUMN email SET NOT NULL
```

---

## 🟢 9️⃣ Add Indexes via Migrations (Not Entities)

```ts
await queryRunner.createIndex(
  'users',
  new TableIndex({
    name: 'IDX_USER_EMAIL',
    columnNames: ['email'],
  }),
);
```

✔ Better control
✔ No unexpected index drops

---

## 🟢 🔟 Use Migrations in CI/CD Pipeline

```bash
npm run migration:run
```

Before app start:

* Kubernetes init container
* Docker entrypoint
* CI deploy step

---

## 🟢 1️⃣1️⃣ Lock Migration Order

```ts
migrationsRun: true
```

Ensures:
✔ DB always in correct state
✔ Prevents app boot with outdated schema

---

## 🟢 1️⃣2️⃣ Environment Separation

| Environment | Action         |
| ----------- | -------------- |
| Local       | generate + run |
| Dev         | run            |
| Staging     | run            |
| Production  | run only       |

❌ Never generate in prod

---

## 🟢 1️⃣3️⃣ Use Naming Convention

```text
YYYYMMDDHHMM-AddUserEmail.ts
```

✔ Clear history
✔ Easy debugging

---

## 🟢 1️⃣4️⃣ Use Transactions Inside Migrations

```ts
await queryRunner.startTransaction();
try {
  await queryRunner.query(`ALTER TABLE ...`);
  await queryRunner.commitTransaction();
} catch {
  await queryRunner.rollbackTransaction();
}
```

✔ Safer schema changes

---

## 🔹 Common Migration Mistakes ❌

❌ Dropping columns with data

❌ Renaming columns without backup

❌ Running migrations manually in DB

❌ Mixing synchronize + migrations

❌ Not testing rollback

---

## 🔹 Interview One-Line Answer (Perfect)

> **Migrations are version-controlled database schema changes. Best practices include disabling `synchronize`, generating and reviewing migrations, keeping them small and atomic, never editing applied migrations, and running them safely in CI/CD.**

---

## 🔹 Real-World Pro Tip 💡

For **high-traffic systems**:

* Use **online schema change**
* Avoid long locks
* Add columns as nullable first
* Backfill in batches

---

## 🔹 What’s NEXT?

You now know:
✔ Entities
✔ Relations
✔ CRUD
✔ DTO
✔ synchronize
✔ Transactions
✔ Migrations

### 🔥 Next advanced topics:

* Indexes & constraints
* Soft delete
* Pagination & filtering
* Performance tuning
* QueryBuilder deep dive
* NestJS + TypeORM interview questions

👉 Say **NEXT INDEXES** or **NEXT SOFT DELETE** 🚀
