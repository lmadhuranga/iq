# 📘 JavaScript Interview Cheat-Sheet

## 1️⃣ JavaScript Basics

* **Single-threaded**, **non-blocking**
* Uses **Event Loop**
* **Interpreted**, **JIT compiled**
* **Dynamically typed**

---

## 2️⃣ Variables

```js
var a = 10;   // function scoped ❌
let b = 20;   // block scoped ✅
const c = 30; // block scoped, no reassignment ✅
```

**Rule:** Prefer `const` → then `let` → avoid `var`

---  

## 5️⃣ Hoisting

```js
console.log(a); // undefined
var a = 10;
```

* `var` → hoisted + initialized
* `let / const` → hoisted ❌ but in **TDZ**

---
Great follow-up 👍  
This is a **very important concept**, and interviewers often expect this exact explanation.

----------

### ✅ Simple Meaning

> **Initialization means assigning a value to a variable in memory.**

In short:

-   **Declare** → create the variable name
-   **Initialize** → give it a value
----------

## 🔁 Declaration vs Initialization

### Example

```js
let x;        // declaration (no value yet)
x = 10;      // initialization (value assigned)

```

----------

## 🧠 Now relate this to **hoisting**

### `var` Example

```js
console.log(a); // undefined
var a = 5;

```

### What JavaScript actually does:

```js
var a;          // declaration + initialization with undefined
console.log(a);
a = 5;          // real value assigned later

```

### ✅ Explanation

> `var` is hoisted **and initialized with `undefined`**,  
> so accessing it before assignment does not throw an error.

----------

## ❌ `let` and `const` Example

```js
console.log(b); // ReferenceError
let b = 5;

```

### What happens internally:

```js
// b is declared (hoisted)
// ❌ NOT initialized
console.log(b); // TDZ error
b = 5;          // initialization happens here
```

### ✅ Explanation

> `let` and `const` are hoisted but **not initialized**,  
> so they cannot be accessed before the declaration line.

----------

## ⏳ Temporal Dead Zone (TDZ) – Linked to Initialization

> TDZ exists **because the variable is not initialized yet**.

```js
{
  // TDZ
  let x = 10; // initialization happens here
}
```

----------

## 6️⃣ Scope

* Global
* Function
* Block (`let`, `const`)

```js
{
  let x = 10;
}
// x ❌ not accessible
```

---

## 7️⃣ Functions

### Normal

```js
function sum(a, b) {
  return a + b;
}
```

### Arrow

```js
const sum = (a, b) => a + b;
```

⚠ Arrow functions:

* No `this`
* No `arguments`
* Cannot be constructors

---

## 8️⃣ `this` Keyword

Depends on **how function is called**

```js
obj.method()   // this = obj
fn()           // this = window / undefined (strict)
```

Arrow → inherits `this` from parent

---

## 9️⃣ Closures ⭐ (VERY IMPORTANT)

```js
function outer() {
  let count = 0;
  return function inner() {
    return ++count;
  };
}
```

👉 Function remembers **outer scope variables**

---

## 🔟 Arrays (High Frequency)

```js
arr.map()     // transform
arr.filter()  // condition
arr.reduce()  // accumulate
```

```js
arr.reduce((acc, cur) => acc + cur, 0);
```

---

## 1️⃣1️⃣ Objects

```js
const user = {
  name: "Alex",
  age: 25
};
```

Access:

```js
user.name
user["age"]
```

---

## 1️⃣2️⃣ Spread vs Rest

### Spread

```js
const a = [1,2];
const b = [...a,3];
```

### Rest

```js
function sum(...nums) {
  return nums.reduce((a,b) => a+b);
}
```

---

## 1️⃣3️⃣ Destructuring

```js
const { name, age } = user;
const [a, b] = [1, 2];
```

---

## 1️⃣4️⃣ Shallow vs Deep Copy

```js
const b = { ...a }; // shallow
```

Deep:

```js
structuredClone(obj);
```

---

## 1️⃣5️⃣ Asynchronous JavaScript

### Callback

```js
setTimeout(() => {}, 1000);
```

### Promise

```js
fetch(url).then(res => res.json());
```

### Async / Await

```js
const data = await fetch(url);
```

---

## 1️⃣6️⃣ Promise APIs

```js
Promise.all()      // fails fast
Promise.allSettled()
Promise.race()
Promise.any()
```

---

## 1️⃣7️⃣ Event Loop ⭐⭐⭐

Order:

1. Call Stack
2. Microtask Queue (`Promise`)
3. Macrotask Queue (`setTimeout`)

```js
Promise.resolve().then(()=>console.log("micro"));
setTimeout(()=>console.log("macro"),0);
```

Output:

```
micro
macro
```

---

## 1️⃣8️⃣ Error Handling

```js
try {
  risky()
} catch (e) {
  console.log(e.message);
}
``` 

---

## 2️⃣0️⃣ Strict Mode

```js
"use strict";
```

* Prevents silent errors
* Safer code
* `this` = `undefined` in functions

---

## 🔥 Rapid-Fire Interview One-Liners

* JS is **single-threaded**
* Functions are **first-class citizens**
* Objects are **reference types**
* Closures enable **data privacy**
* Event loop enables **non-blocking I/O**
* `map` returns new array, `forEach` doesn’t

---

## 1️⃣ Rule #1: JavaScript Execution Order

Always explain in this order 👇

> **1. Synchronous code**
> **2. Microtasks (Promises)**
> **3. Macrotasks (setTimeout, setInterval)**

---

## 2️⃣ Example: Event Loop (MOST COMMON)

### Code

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

### Output

```
A
D
C
B
```

### ✅ How to Explain (Interview English)

> JavaScript first executes all synchronous code, so `"A"` and `"D"` are printed.
> Then it checks the microtask queue, where Promises run, so `"C"` is printed.
> Finally, it executes macrotasks like `setTimeout`, so `"B"` is printed last.

---

## 3️⃣ `var` in Loop Example

### Code

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

### Output

```
3
3
3
```

### ✅ How to Explain

> `var` is function-scoped, not block-scoped.
> By the time `setTimeout` executes, the loop has already finished and `i` equals 3.
> All callbacks reference the same variable.

---

## 4️⃣ Fix with `let`

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

### Output

```
0
1
2
```

### ✅ Explanation

> `let` creates a new block-scoped variable for each iteration, so each callback gets its own value of `i`.

---

## 5️⃣ Object Comparison

### Code

```js
{} === {}
```

### Output

```
false
```

### ✅ Explanation

> Objects are compared by reference, not by value.
> Even though both objects look identical, they are stored at different memory locations.

---

## 6️⃣ Arrow Function `this`

### Code

```js
const obj = {
  name: "JS",
  show: () => {
    console.log(this.name);
  }
};

obj.show();
```

### Output

```
undefined
```

### ✅ Explanation

> Arrow functions do not have their own `this`.
> They inherit `this` from their surrounding scope, which in this case is the global scope, not the object.

---

## 7️⃣ Closure Example

### Code

```js
function counter() {
  let count = 0;
  return () => count++;
}

const c = counter();
console.log(c());
console.log(c());
```

### Output

```
0
1
```

### ✅ Explanation

> The inner function forms a closure and remembers the `count` variable even after the outer function has finished executing.

---

## 8️⃣ `typeof null`

```js
typeof null;
```

### Output

```
"object"
```

### ✅ Explanation

> This is a known JavaScript bug from the early days of the language and was never fixed for backward compatibility.

---

## 9️⃣ `parseInt` Trap

### Code

```js
["1","2","3"].map(parseInt);
```

### Output

```
[1, NaN, NaN]
```

### ✅ Explanation

> `map` passes two arguments: value and index.
> `parseInt` treats the second argument as radix, so `parseInt("2",1)` and `parseInt("3",2)` return `NaN`.

---

## 🔟 Golden Interview Formula ⭐

When asked **WHY**, structure your answer like this:

> **1️⃣ What JavaScript feature is involved**
> **2️⃣ How JavaScript actually executes it**
> **3️⃣ Why that causes this output**

Example:

> “This happens because JavaScript uses closures and function scope.
> The callback executes after the loop finishes, so all callbacks share the same variable value.”

---

## 🎯 Final Interview Tip

If you say:

* “because of **scope**”
* “because of **closure**”
* “because of **event loop**”
* “because of **reference vs value**”

…and explain **one sentence more** 👌
You sound like a **senior engineer**.

---
