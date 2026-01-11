Below is a **🔥 NestJS + ORM Interview Questions Cheat Sheet**
(Perfect for **Mid → Senior → SSE** level interviews)

---

# 🚀 NestJS ORM Interview Questions & Answers

---

## 1️⃣ What ORM is commonly used with NestJS?

**TypeORM** and **Prisma** are most common.

* **TypeORM** → Entity-based, decorator-driven
* **Prisma** → Schema-first, type-safe, generated client

---

## 2️⃣ How does NestJS integrate with TypeORM?

Using `@nestjs/typeorm`.

```ts
TypeOrmModule.forRoot({...})
TypeOrmModule.forFeature([User])
```

---

## 3️⃣ What is an Entity?

A class mapped to a database table.

```ts
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
```

---

## 4️⃣ What is a Repository?

Repository handles **CRUD operations**.

```ts
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}
}
```

---

## 5️⃣ Repository vs EntityManager?

| Repository      | EntityManager  |
| --------------- | -------------- |
| Entity-specific | Generic        |
| Cleaner         | More flexible  |
| Preferred       | Advanced cases |

---

## 6️⃣ Active Record vs Data Mapper?

| Active Record       | Data Mapper        |
| ------------------- | ------------------ |
| Logic inside entity | Logic in service   |
| Simple apps         | Enterprise apps    |
| ❌ Not recommended   | ✅ NestJS uses this |

---

## 7️⃣ What are Relations?

Relationships between tables.

```ts
@OneToMany(() => Order, o => o.user)
orders: Order[];
```

Types:

* OneToOne
* OneToMany
* ManyToOne
* ManyToMany

---

## 8️⃣ Eager vs Lazy Loading?

| Eager       | Lazy               |
| ----------- | ------------------ |
| Auto-loaded | Loaded on demand   |
| Simple      | Better performance |
| Risky       | Preferred          |

---

## 9️⃣ How to Prevent N+1 Problem?

Use `QueryBuilder` or `leftJoinAndSelect`.

```ts
this.repo
  .createQueryBuilder('user')
  .leftJoinAndSelect('user.orders', 'order')
  .getMany();
```

---

## 🔟 How to Handle Transactions?

Using `QueryRunner`.

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

## 1️⃣1️⃣ How to Implement Pagination?

```ts
find({
  skip: 0,
  take: 10,
});
```

Or with QueryBuilder for large datasets.

---

## 1️⃣2️⃣ How to Handle Migrations?

```bash
typeorm migration:generate
typeorm migration:run
```

Best practice:
❌ `synchronize: true` in prod
✅ Migrations only

---

## 1️⃣3️⃣ How to Secure DB Queries?

* Use parameterized queries
* Avoid raw SQL
* Validate DTOs

```ts
where("user.email = :email", { email })
```

---

## 1️⃣4️⃣ How to Handle Soft Deletes?

```ts
@DeleteDateColumn()
deletedAt: Date;
```

```ts
repo.softDelete(id);
```

---

## 1️⃣5️⃣ How to Improve ORM Performance?

* Index frequently used columns
* Use pagination
* Avoid eager loading
* Use QueryBuilder for joins
* Cache queries

---

## 1️⃣6️⃣ How to Implement Multi-Tenancy?

Approaches:

* Separate DB per tenant
* Shared DB + tenant_id column
* Dynamic connection per request

---

## 1️⃣7️⃣ Prisma vs TypeORM?

| Feature         | Prisma    | TypeORM  |
| --------------- | --------- | -------- |
| Type safety     | ⭐⭐⭐⭐⭐     | ⭐⭐⭐      |
| Migrations      | Excellent | OK       |
| Learning curve  | Easy      | Medium   |
| Complex queries | Limited   | Powerful |

---

## 1️⃣8️⃣ How to Mock ORM in Tests?

```ts
{
  provide: getRepositoryToken(User),
  useValue: mockRepo,
}
```

---

## 1️⃣9️⃣ What is `synchronize`?

Auto-syncs entities with DB.

⚠️ **Never use in production**

---

## 2️⃣0️⃣ Common ORM Mistakes (Interview Gold)

❌ Eager loading everywhere
❌ No indexes
❌ Raw queries everywhere
❌ Large transactions
❌ No pagination

---

## 🧠 One-Line Summary (Memorize)

> **NestJS ORM follows Data Mapper pattern, uses repositories for clean separation of business logic, and relies on QueryBuilder and transactions for scalable database operations.**

---

If you want next:

* ✅ **Advanced ORM interview questions**
* 🧪 **Transactions & concurrency deep dive**
* 🏗️ **Multi-tenant DB design in NestJS**
* ⚡ **Performance tuning checklist**

Just say **next** 👍
