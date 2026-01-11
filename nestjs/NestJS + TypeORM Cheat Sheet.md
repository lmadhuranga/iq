Below is a **🔥 NestJS + TypeORM Cheat Sheet**
**Compact · Interview-ready · Production-oriented**

---

# 🚀 NestJS + TypeORM Cheat Sheet

---

## 🧠 What is TypeORM?

**TypeORM** is a **Data Mapper ORM** that maps **TypeScript classes → database tables**.
NestJS integrates it via `@nestjs/typeorm`.

---

## 📦 Setup

```bash
npm install @nestjs/typeorm typeorm pg
```

```ts
// app.module.ts
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'pass',
  database: 'db',
  autoLoadEntities: true,
  synchronize: false, // NEVER in prod
});
```

---

## 🧱 Entity

```ts
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  createdAt: Date;
}
```

---

## 🔗 Relations

```ts
@ManyToOne(() => User, user => user.orders)
user: User;
```

| Relation | Decorator     |
| -------- | ------------- |
| 1 → 1    | `@OneToOne`   |
| 1 → N    | `@OneToMany`  |
| N → 1    | `@ManyToOne`  |
| N ↔ N    | `@ManyToMany` |

---

## 📥 Repository Injection

```ts
constructor(
  @InjectRepository(User)
  private readonly userRepo: Repository<User>,
) {}
```

---

## ✍️ CRUD Operations

```ts
repo.find()
repo.findOne({ where: { id } })
repo.save(entity)
repo.update(id, dto)
repo.delete(id)
```

---

## 🔍 Query Builder (IMPORTANT)

```ts
repo.createQueryBuilder('u')
  .leftJoinAndSelect('u.orders', 'o')
  .where('u.email = :email', { email })
  .getOne();
```

✔ Prevents N+1
✔ Optimized joins
✔ Complex queries

---

## 📄 Pagination

```ts
repo.find({
  skip: 0,
  take: 10,
});
```

Better for large data:

```ts
qb.skip(0).take(10)
```

---

## 🔐 Transactions

```ts
const qr = dataSource.createQueryRunner();
await qr.startTransaction();
try {
  await qr.manager.save(user);
  await qr.commitTransaction();
} catch {
  await qr.rollbackTransaction();
} finally {
  await qr.release();
}
```

---

## 🧪 Soft Delete

```ts
@DeleteDateColumn()
deletedAt: Date;
```

```ts
repo.softDelete(id);
repo.restore(id);
```

---

## ⚡ Indexing (Performance)

```ts
@Index(['email'])
@Column()
email: string;
```

---

## 🧠 Lazy vs Eager Loading

```ts
@ManyToOne(() => User, { eager: false })
```

| Eager      | Lazy            |
| ---------- | --------------- |
| Auto fetch | Fetch on demand |
| Risky      | Preferred       |

---

## 🧩 Migrations

```bash
typeorm migration:generate -n Init
typeorm migration:run
```

❌ `synchronize: true` in prod
✅ Migrations only

---

## 🔒 Prevent SQL Injection

```ts
.where('user.email = :email', { email })
```

✔ Never string-concat queries

---

## 🧪 Testing (Mock Repo)

```ts
{
  provide: getRepositoryToken(User),
  useValue: mockRepo,
}
```

---

## 🧠 Multi-Tenancy Patterns

1️⃣ DB per tenant
2️⃣ Shared DB + `tenant_id`
3️⃣ Dynamic connections (advanced)

---

## ⚠️ Common Mistakes (Interview Gold)

❌ Eager loading everywhere
❌ No pagination
❌ No indexes
❌ Using raw SQL blindly
❌ Large transactions

---

## ⚡ Performance Tips

* Use indexes
* Avoid `find()` on big tables
* Use QueryBuilder for joins
* Batch writes
* Cache hot queries

---

## 🏁 One-Line Summary (Memorize)

> **NestJS + TypeORM uses the Data Mapper pattern with repositories, QueryBuilder for complex queries, and transactions for consistency in scalable applications.**

---

If you want next:

* 🔥 **Advanced TypeORM queries**
* 🧠 **Transactions & locking**
* 🏗️ **Multi-tenant architecture**
* ⚡ **TypeORM performance tuning**

Just say **next** 👍
