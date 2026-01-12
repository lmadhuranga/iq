

```text
====================================================
Todos App – TypeORM Relations (Simple & Clean)
====================================================
```

---

```text
----------------------------------------------------
1️⃣ ONE-TO-ONE (User ↔ Profile)
----------------------------------------------------
```

```ts
// User
@OneToOne(() => Profile, profile => profile.user)
@JoinColumn()
profile: Profile;
```

```ts
// Profile
@OneToOne(() => User, (user) => user.profile)
user: User;
```

```text
+---------------------+          +---------------------+
| users               |          | profiles            |
+---------------------+          +---------------------+
| id (PK)             |<---------| userId (FK, UNIQUE) |
| name                |          | id (PK)             |
| email               |          | bio                 |
| isActive            |          | avatar              |
| created             |          +---------------------+
| updated             |
+---------------------+
```

---

```text
----------------------------------------------------
2️⃣ ONE-TO-MANY (User → Todos)
----------------------------------------------------
```

```ts
// User
@OneToMany(() => Todo, (todo) => todo.user)
todos: Todo[];
```

```ts
// Todo
@ManyToOne(() => User, (user) => user.todos)
user: User;
```

```text
+---------------------+          +---------------------+
| users               |          | todos               |
+---------------------+          +---------------------+
| id (PK)             |<---------| userId (FK)         |
| name                |          | id (PK)             |
| email               |          | title               |
| isActive            |          | note                |
| created             |          | isComplete          |
| updated             |          +---------------------+
+---------------------+
```

---

```text
----------------------------------------------------
3️⃣ MANY-TO-MANY (Users ↔ Todos)
----------------------------------------------------
```

```ts
// User
@ManyToMany(() => Todo, (todo) => todo.users)
todos: Todo[];
```

```ts
// Todo
@ManyToMany(() => User, (user) => user.todos)
@JoinTable()
users: User[];
```

```text
+---------------------+      +---------------------+      +----------------------+
| users               |      | users_todos         |      | todos                |
+---------------------+      +---------------------+      +----------------------+
| id (PK)             |<-----| userId (FK)         |----->| id (PK)              |
| name                |      | todoId (FK)         |      | title                |
| email               |      | (userId,todoId PK)  |      | note                 |
| isActive            |      +---------------------+      | isComplete           |
| created             |                                     +----------------------+
| updated             |
+---------------------+
```

---

```text
----------------------------------------------------
Quick Mapping (Todos App)
----------------------------------------------------
User Profile        → One-to-One
Personal Todos      → One-to-Many
Shared / Team Todos → Many-to-Many
```
  
