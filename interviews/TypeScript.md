**JavaScript / React / Node.js** 👇
(you can follow this step-by-step and start using TS immediately)

---

## 1️⃣ TypeScript Basics (Day 1–2)

### Why TypeScript?

* Adds **types** to JavaScript
* Catches bugs **at compile time**
* Improves **autocomplete & refactoring**

### Basic Types

```ts
let name: string = "Maduranga";
let age: number = 28;
let isActive: boolean = true;
let skills: string[] = ["React", "Node"];
```

### Any vs Unknown

```ts
let x: any = 10;        // ❌ avoid
let y: unknown = 10;   // ✅ safer
```

---

## 2️⃣ Functions & Objects (Day 2–3)

### Function Types

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### Object Typing

```ts
const user: {
  id: number;
  name: string;
  isAdmin?: boolean; // optional
} = {
  id: 1,
  name: "John"
};
```

---

## 3️⃣ Interfaces vs Types (Very Important)

### Interface (preferred for objects)

```ts
interface User {
  id: number;
  name: string;
}
```

### Type (more flexible)

```ts
type Status = "active" | "inactive";
```

### When to use

| Use case      | Prefer      |
| ------------- | ----------- |
| Object shape  | `interface` |
| Union / Tuple | `type`      |

---

## 4️⃣ Advanced Types (Day 4–5)

### Union & Literal Types

```ts
type Role = "admin" | "user" | "guest";

function check(role: Role) {}
```

### Intersection

```ts
type A = { a: number };
type B = { b: string };

type C = A & B;
```

### Enums (use carefully)

```ts
enum OrderStatus {
  PENDING,
  PAID,
  CANCELLED
}
```

---

## 5️⃣ Generics (🔥 MUST KNOW)

### Generic Function

```ts
function identity<T>(value: T): T {
  return value;
}

identity<string>("hello");
identity<number>(10);
```

### Generic Interface

```ts
interface ApiResponse<T> {
  data: T;
  error?: string;
}
```

---

## 6️⃣ Type Narrowing (Interview Favorite)

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

### Discriminated Union

```ts
type Success = { status: "success"; data: string };
type ErrorRes = { status: "error"; message: string };

type Response = Success | ErrorRes;
```

---

## 7️⃣ Utility Types (🔥 Very Important)

```ts
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = Partial<User>;
type UserPreview = Pick<User, "id" | "name">;
type UserWithoutAge = Omit<User, "age">;
```

---

## 8️⃣ TypeScript with React (Must Know)

### Props Typing

```tsx
type Props = {
  title: string;
  count?: number;
};

const Header: React.FC<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};
```

### useState

```tsx
const [user, setUser] = useState<User | null>(null);
```

---

## 9️⃣ TypeScript with Node.js

### Express Request Typing

```ts
import { Request, Response } from "express";

app.get("/user", (req: Request, res: Response) => {
  res.json({ success: true });
});
```

---

## 🔟 tsconfig.json (Understand This)

```json
{
  "strict": true,
  "noImplicitAny": true,
  "strictNullChecks": true
}
```

👉 **Always enable `strict` in real projects**

TypeScript topics interviewers care about.

Here’s a **clear, short, senior-level explanation** for each 👇

---

## 1️⃣ `interface` vs `type`

### `interface`

```ts
interface User {
  id: number;
  name: string;
}
```

✅ Best for **object shapes**
✅ Can be **extended**

```ts
interface Admin extends User {
  role: string;
}
```

✅ Can be **merged** (declaration merging)

---

### `type`

```ts
type User = {
  id: number;
  name: string;
};
```

✅ More **flexible**
✅ Required for **union / intersection**

```ts
type Status = "active" | "inactive";
type Admin = User & { role: string };
```

### 🧠 Rule of thumb

| Use case                        | Choose      |
| ------------------------------- | ----------- |
| Object contracts / APIs         | `interface` |
| Union / utility / complex types | `type`      |

---

## 2️⃣ Generics (VERY IMPORTANT)

### Problem (without generics ❌)

```ts
function wrap(value: any) {
  return value;
}
```

### Solution (with generics ✅)

```ts
function wrap<T>(value: T): T {
  return value;
}
```

✔ Preserves **type safety**
✔ Reusable
✔ Strong autocomplete

### Generic API Response

```ts
interface ApiResponse<T> {
  data: T;
  error?: string;
}
```

---

## 3️⃣ Union Types & Type Narrowing

### Union

```ts
type ID = string | number;
```

### Narrowing with `typeof`

```ts
function print(id: ID) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  }
}
```

### Discriminated Union (🔥 Interview favorite)

```ts
type Success = { status: "success"; data: string };
type ErrorRes = { status: "error"; message: string };

type Response = Success | ErrorRes;

function handle(res: Response) {
  if (res.status === "success") {
    console.log(res.data);
  }
}
```

---

## 4️⃣ Utility Types (MUST KNOW)

```ts
interface User {
  id: number;
  name: string;
  age: number;
}
```

### Common Utilities

```ts
Partial<User>     // all optional
Pick<User, "id" | "name">
Omit<User, "age">
Readonly<User>
Record<string, number>
```

### Real example

```ts
type UpdateUser = Partial<User>;
```

---

## 5️⃣ React + TypeScript Patterns

### Props

```tsx
type Props = {
  title: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ title }) => {
  return <button>{title}</button>;
};
```

### useState

```tsx
const [user, setUser] = useState<User | null>(null);
```

### Event typing

```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
```

### Children typing

```tsx
type Props = {
  children: React.ReactNode;
};
```

---

## 6️⃣ Why `unknown` is Safer Than `any`

### `any` ❌ (dangerous)

```ts
let value: any = "hello";
value.toUpperCase(); // no error, even if wrong
```

🚨 TypeScript **stops protecting you**

---

### `unknown` ✅ (safe)

```ts
let value: unknown = "hello";

if (typeof value === "string") {
  value.toUpperCase(); // allowed
}
```

✔ Forces **type checking**
✔ Prevents runtime bugs
✔ Best for **API / external data**

### 🧠 Rule

> Use `unknown` when you **don’t know the type yet**,
> use `any` almost **never**.

 


* ⚛️ Convert your **React project to TS**
* 📘 Make a **1-page TypeScript cheat sheet**

Just tell me 👍
