Great 👍
Since you’re **learning NestJS + TypeORM**, let’s go **step-by-step** and focus only on **Entities** in a **clear, beginner → interview-ready way**.

---

# 📦 What is an Entity in NestJS + TypeORM?

An **Entity** is a **class that represents a database table**.

👉 Each **class = table**
👉 Each **property = column**

TypeORM uses **decorators** to map the class to the database.

---

## 🔹 Basic Entity Example

```ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
```

### What happens in DB?

```sql
user
---------
id
name
email
```

---

## 🔹 Important Entity Decorators (MUST KNOW)

### 1️⃣ `@Entity()`

Marks the class as a DB table.

```ts
@Entity('users')
export class User {}
```

✔ Table name = `users`

---

### 2️⃣ `@PrimaryGeneratedColumn()`

Auto-generated primary key.

```ts
@PrimaryGeneratedColumn()
id: number;
```

Variants:

```ts
@PrimaryGeneratedColumn('uuid')
id: string;
```

---

### 3️⃣ `@Column()`

Defines a column.

```ts
@Column()
name: string;
```

---

## 🔹 Column Options (Very Important)

```ts
@Column({
  type: 'varchar',
  length: 100,
  nullable: false,
  unique: true,
})
email: string;
```

### Common Options

| Option     | Meaning           |
| ---------- | ----------------- |
| `nullable` | Allow NULL        |
| `unique`   | Unique constraint |
| `default`  | Default value     |
| `length`   | Column length     |
| `type`     | DB type           |

---

## 🔹 Common Column Types

```ts
@Column()               // varchar
name: string;

@Column('int')
age: number;

@Column('boolean')
isActive: boolean;

@Column('text')
description: string;

@Column('timestamp')
createdAt: Date;
```

---

## 🔹 Auto Timestamp Columns (BEST PRACTICE)

```ts
import {
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updatedAt: Date;
```

✔ Automatically handled by TypeORM

---

## 🔹 Full Beginner-Friendly Entity Example

```ts
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

---

## 🔹 Register Entity in NestJS

### 1️⃣ AppModule (DB connection)

```ts
TypeOrmModule.forRoot({
  type: 'postgres',
  autoLoadEntities: true,
});
```

---

### 2️⃣ Feature Module

```ts
@Module({
  imports: [TypeOrmModule.forFeature([User])],
})
export class UsersModule {}
```

⚠️ If you skip this → **Repository injection error**

---

## 🔹 How Entity is Used (Simple Flow)

```
Controller → Service → Repository → Entity → DB
```

---

## 🔹 Entity vs DTO (VERY IMPORTANT)

| Entity         | DTO                |
| -------------- | ------------------ |
| Maps DB table  | Maps API request   |
| Has decorators | Has validation     |
| Used by ORM    | Used by controller |
| Can change DB  | No DB logic        |

❌ Never expose Entity directly to API
✅ Use DTOs

---

## 🔹 Common Beginner Mistakes ❌

❌ Putting business logic in Entity
❌ Returning Entity directly to client
❌ Forgetting `forFeature()`
❌ Using `synchronize: true` in production
❌ Mixing DTO & Entity

---

## 🔹 Interview One-Line Answer

> **An Entity in NestJS TypeORM is a class that maps to a database table using decorators like `@Entity`, `@Column`, and `@PrimaryGeneratedColumn`.**

---

## 🔹 What You Should Learn NEXT (Recommended Order)

1️⃣ Entity basics (you’re here ✅)
2️⃣ Repository (`@InjectRepository`)
3️⃣ DTO + Validation
4️⃣ Relations (`OneToMany`, `ManyToOne`)
5️⃣ Migrations
6️⃣ Soft delete
7️⃣ Indexes & constraints

---

👉 **Next lesson suggestion:**
**“Relations in TypeORM (OneToMany / ManyToOne) with real examples”**

Perfect 👍
Let’s move to the **NEXT** step in **NestJS + TypeORM learning**.

---

# 🔗 TypeORM Relations in NestJS (Beginner → Interview Ready)

Relations define **how tables are connected** in the database.

---

## 🔹 Why Relations?

Real apps need relationships:

* User → Orders
* Customer → Contacts
* Post → Comments

Instead of duplicating data, we **link tables using foreign keys**.

---

## 🔹 Types of Relations (MUST KNOW)

| Relation   | Meaning     |
| ---------- | ----------- |
| OneToOne   | 1 ↔ 1       |
| OneToMany  | 1 → Many    |
| ManyToOne  | Many → 1    |
| ManyToMany | Many ↔ Many |

---

# 🟢 Most Common: **OneToMany / ManyToOne**

### Example:

👉 One **User** can have **many Orders**
👉 Many **Orders** belong to **one User**

---

## 🔹 User Entity

```ts
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
```

---

## 🔹 Order Entity

```ts
@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product: string;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
}
```

---

## 🔹 What Happens in DB?

```
users
-----
id
name

orders
------
id
product
userId   ← foreign key
```

✔ `ManyToOne` owns the relationship
✔ Foreign key is stored here

---

## 🔹 `@JoinColumn()` (Important)

Used on **owning side** (ManyToOne / OneToOne)

```ts
@ManyToOne(() => User)
@JoinColumn({ name: 'user_id' })
user: User;
```

DB column → `user_id`

---

## 🔹 OneToOne Relation Example

### User ↔ Profile

```ts
@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bio: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
```

```ts
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}
```

✔ One user → one profile

---

## 🔹 ManyToMany Example

### Student ↔ Course

```ts
@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Course)
  @JoinTable()
  courses: Course[];
}
```

```ts
@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Student)
  students: Student[];
}
```

DB creates:

```
student_courses
---------------
studentId
courseId
```

---

## 🔹 Cascade (Very Important)

```ts
@OneToMany(() => Order, (order) => order.user, {
  cascade: true,
})
orders: Order[];
```

✔ Saves related entities automatically
⚠️ Use carefully (can delete data)

---

## 🔹 Eager vs Lazy Loading

### Eager

```ts
@ManyToOne(() => User, { eager: true })
user: User;
```

✔ Auto-loaded

---

### Lazy

```ts
@ManyToOne(() => User)
user: Promise<User>;
```

✔ Loaded only when needed

---

## 🔹 Fetch Relations (Query)

```ts
this.userRepo.find({
  relations: ['orders'],
});
```

OR QueryBuilder:

```ts
this.userRepo
  .createQueryBuilder('user')
  .leftJoinAndSelect('user.orders', 'order')
  .getMany();
```

---

## 🔹 Common Mistakes ❌

❌ Forgetting inverse side
❌ Expecting OneToMany to create column
❌ Using cascade blindly
❌ Returning circular JSON (infinite loop)

👉 Fix with:

```ts
@Exclude()
```

or DTOs

---

## 🔹 Interview One-Liner

> **TypeORM relations define how entities are connected using decorators like `OneToMany`, `ManyToOne`, and `ManyToMany`, where the owning side holds the foreign key.**

---

## 🔹 What’s NEXT After Relations?

### Recommended order:

1️⃣ Relations ✅
2️⃣ Repositories & CRUD
3️⃣ DTO + Validation
4️⃣ Migrations
5️⃣ Soft delete
6️⃣ Indexes
7️⃣ Transactions

👉 Say **NEXT CRUD** or **NEXT DTO** and we continue 🚀

Great 👍
Now we move to the **MOST PRACTICAL PART** of NestJS + TypeORM:

---

# 🧱 Repositories & CRUD in NestJS (Beginner → Interview Ready)

This is where **Entities become useful**.

---

## 🔹 What is a Repository?

A **Repository** is a **TypeORM helper** that allows you to:

* Save data
* Read data
* Update data
* Delete data

👉 It works **on top of an Entity**

---

## 🔹 Flow (Very Important)

```
Controller → Service → Repository → Entity → Database
```

❌ Controller should NOT talk to DB
✅ Service uses Repository

---

## 🔹 Injecting Repository in NestJS

### 1️⃣ Register Entity in Module

```ts
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
```

---

### 2️⃣ Inject Repository in Service

```ts
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}
}
```

✔ Now you can talk to DB

---

# 🟢 CRUD OPERATIONS (Must Know)

---

## 🟢 CREATE

### Service

```ts
createUser(name: string, email: string) {
  const user = this.userRepo.create({ name, email });
  return this.userRepo.save(user);
}
```

✔ `create()` → creates object
✔ `save()` → inserts into DB

---

### Controller

```ts
@Post()
create(@Body() body) {
  return this.usersService.createUser(body.name, body.email);
}
```

---

## 🟢 READ (Find)

### Find all

```ts
findAll() {
  return this.userRepo.find();
}
```

---

### Find one by ID

```ts
findOne(id: number) {
  return this.userRepo.findOneBy({ id });
}
```

---

### Find with condition

```ts
findByEmail(email: string) {
  return this.userRepo.findOne({ where: { email } });
}
```

---

## 🟢 UPDATE

### Simple update

```ts
updateUser(id: number, data: Partial<User>) {
  return this.userRepo.update(id, data);
}
```

✔ Fast
❌ Does NOT return updated entity

---

### Safe update (Recommended)

```ts
async updateUser(id: number, data: Partial<User>) {
  const user = await this.userRepo.findOneBy({ id });
  if (!user) throw new NotFoundException();

  Object.assign(user, data);
  return this.userRepo.save(user);
}
```

---

## 🟢 DELETE

### Hard delete

```ts
deleteUser(id: number) {
  return this.userRepo.delete(id);
}
```

---

### Soft delete (Recommended)

```ts
@DeleteDateColumn()
deletedAt: Date;
```

```ts
softDelete(id: number) {
  return this.userRepo.softDelete(id);
}
```

---

# 🔹 Repository Methods You MUST Remember

| Method         | Use             |
| -------------- | --------------- |
| `create()`     | Create object   |
| `save()`       | Insert / Update |
| `find()`       | Fetch all       |
| `findOne()`    | Fetch one       |
| `update()`     | Partial update  |
| `delete()`     | Hard delete     |
| `softDelete()` | Soft delete     |
| `restore()`    | Restore         |

---

## 🔹 CRUD with Relations

```ts
this.userRepo.find({
  relations: ['orders'],
});
```

---

## 🔹 QueryBuilder (Advanced CRUD)

```ts
this.userRepo
  .createQueryBuilder('user')
  .where('user.email = :email', { email })
  .getOne();
```

✔ Used for complex queries

---

## 🔹 Common Beginner Mistakes ❌

❌ Using repository in controller
❌ Exposing entity directly
❌ Using `update()` blindly
❌ Not handling `null` result
❌ Not validating input

---

## 🔹 Interview One-Liner

> **In NestJS with TypeORM, repositories are injected using `@InjectRepository` and are used inside services to perform CRUD operations on entities.**

---

## 🔹 What’s NEXT?

### Recommended order:

1️⃣ Entities ✅
2️⃣ Relations ✅
3️⃣ Repositories & CRUD ✅
4️⃣ **DTO + Validation** ⬅️ NEXT
5️⃣ Migrations
6️⃣ Transactions

👉 Just say **NEXT DTO** and we continue 🚀

Awesome 👍
Now you’re entering **REAL-WORLD NestJS + TypeORM usage**.

---

# 📦 DTO & Validation in NestJS (VERY IMPORTANT)

DTOs are **mandatory** for:
✔ Clean architecture
✔ Validation
✔ Security
✔ Interview answers

---

## 🔹 What is a DTO?

**DTO (Data Transfer Object)** is a **class that defines the structure of incoming or outgoing data**.

👉 DTO ≠ Entity
👉 DTO is for **API layer**
👉 Entity is for **DB layer**

---

## 🔹 Why DTO is Required?

❌ Never trust client input
❌ Never expose entity directly

DTO helps:

* Validate input
* Prevent extra fields
* Avoid mass assignment attacks
* Keep DB structure hidden

---

## 🔹 Install Validation Packages

```bash
npm install class-validator class-transformer
```

---

## 🔹 Enable Validation Globally

```ts
// main.ts
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,        // remove extra fields
    forbidNonWhitelisted: true, // throw error on extra fields
    transform: true,        // auto transform types
  }),
);
```

---

# 🟢 Create DTO Example

### CreateUserDto

```ts
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
```

---

## 🔹 Update DTO (Partial)

```ts
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
```

✔ Makes all fields optional

---

## 🔹 Use DTO in Controller

```ts
@Post()
create(@Body() dto: CreateUserDto) {
  return this.usersService.create(dto);
}
```

---

## 🔹 Use DTO in Service

```ts
create(dto: CreateUserDto) {
  const user = this.userRepo.create(dto);
  return this.userRepo.save(user);
}
```

✔ Clean
✔ Secure
✔ Professional

---

## 🔹 DTO vs Entity (Interview Favorite)

| DTO         | Entity         |
| ----------- | -------------- |
| API data    | DB mapping     |
| Validation  | ORM decorators |
| No DB logic | DB logic       |
| Exposed     | Never exposed  |

---

## 🔹 Prevent Extra Fields (Security)

Input:

```json
{
  "name": "John",
  "email": "john@mail.com",
  "isAdmin": true
}
```

❌ Without DTO → `isAdmin` saved
✅ With DTO + whitelist → removed

---

## 🔹 Validation Errors (Response)

```json
{
  "statusCode": 400,
  "message": [
    "email must be an email"
  ],
  "error": "Bad Request"
}
```

---

## 🔹 Nested DTO (Relations)

```ts
class AddressDto {
  @IsString()
  city: string;
}

export class CreateUserDto {
  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;
}
```

---

## 🔹 Common DTO Decorators

| Decorator       | Use           |
| --------------- | ------------- |
| `@IsString()`   | String        |
| `@IsEmail()`    | Email         |
| `@IsInt()`      | Number        |
| `@IsOptional()` | Optional      |
| `@Min()`        | Min value     |
| `@Max()`        | Max value     |
| `@Length()`     | String length |

---

## 🔹 Interview One-Line Answer

> **DTOs in NestJS define and validate request data using `class-validator` and help separate API contracts from database entities.**

---

## 🔹 What’s NEXT?

### Recommended learning path:

1️⃣ Entities ✅
2️⃣ Relations ✅
3️⃣ CRUD & Repository ✅
4️⃣ DTO & Validation ✅
5️⃣ **Migrations** ⬅️ NEXT
6️⃣ Transactions
7️⃣ Soft delete & indexing

👉 Say **NEXT MIGRATIONS** and we continue 🚀
