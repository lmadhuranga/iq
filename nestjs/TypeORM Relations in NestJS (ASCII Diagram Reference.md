```text
====================================================
TypeORM Relations in NestJS (ASCII Diagram Reference)
====================================================
```
```text
========================
1) One-to-One
========================
```

```ts
// User
@OneToOne(() => Profile)
@JoinColumn()
profile: Profile;

// Profile
@OneToOne(() => User, (user) => user.profile)
user: User;
```

```text
+---------------------+      +---------------------+
| users               |      | profiles            |
+---------------------+      +---------------------+
| id (PK)             |<---->| id (PK)             |
| name                |      | bio                 |
| email               |      | avatar              |
| profileId (FK)      |      | userId (FK, UNIQUE) |
+---------------------+      +---------------------+
```

```text
========================
2) One-to-Many / Many-to-One
========================
```

```ts
// User
@OneToMany(() => Todo, (todo) => todo.user)
todos: Todo[];

// Todo
@ManyToOne(() => User, (user) => user.todos)
user: User;
```

```text
+---------------------+      +----------------------+
| users               |      | todos                |
+---------------------+      +----------------------+
| id (PK)             |<-----| id (PK)              |
| name                |      | title                |
| email               |      | note                 |
|                     |      | userId (FK)          |
+---------------------+      | isComplete           |
                             +----------------------+
```

```text
========================
3) Many-to-Many
========================
```

```ts
// User
@ManyToMany(() => Todo, (todo) => todo.users)
todos: Todo[];

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
| createdAt           |                                     +----------------------+
| updatedAt           |
+---------------------+
```

