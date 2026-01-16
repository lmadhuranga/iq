Perfect 👍
These are **pure execution-context + hoisting + closure** questions.
I’ll explain **each block step-by-step**, exactly how JS engine thinks.

---

# 🧠 JavaScript Execution, Hoisting & Closure — Detailed Explanation

---

## 1️⃣ `var` hoisting (example A)

```js
console.log('a', a)
var a = 10;
```

### ✅ Output

```
a undefined
```

### 🔍 What happens internally

**Creation phase (hoisting):**

```js
var a;   // declared, initialized as undefined
```

**Execution phase:**

```js
console.log(a); // undefined
a = 10;
```

### 🎯 Key point

* `var` is **hoisted with undefined**
* Initialization happens later

---

## 2️⃣ Same thing, written differently (example B)

```js
var b
console.log('b', b);
b = 10;
```

### ✅ Output

```
b undefined
```

### 🧠 Explanation

This is **exactly the same** as example 1, just written manually.

### 🎯 Interview note

> Hoisting is not magic — JS literally rewrites code like this internally.

---

## 3️⃣ Function hoisting (VERY IMPORTANT)

```js
console.log('foo=>', foo)
console.log('foo()=>', foo())

function foo() {
  console.log('foo');
}
```

### ✅ Output

```
foo=> ƒ foo() { ... }
foo
foo()=> undefined
```

### 🔍 Why?

**Creation phase:**

```js
function foo() {
  console.log('foo');
}
```

✔ Entire function is available **before execution**

**Execution phase:**

```js
console.log(foo);     // function reference
console.log(foo());  // calls function
```

Function logs `"foo"`
Return value is `undefined` → printed by `console.log`

### 🎯 Key point

> Function declarations are **fully hoisted**, body included.

---

## 4️⃣ Function scope vs global scope

```js
var d = 0

function hello () {
  var d = 10
  console.log('d', d)
}
hello()
```

### ✅ Output

```
d 10
```

### 🧠 Explanation

* Function has its **own execution context**
* Inner `d` **shadows** outer `d`
* Global `d` remains unchanged

### 🎯 Interview sentence

> JavaScript uses function scope, and local variables override outer scope variables.

---

## 5️⃣ `var` + IIFE + closure (fixed version)

```js
for (var i = 0; i < 3; i++) {
  ((x) => {
    setTimeout(() => console.log('x', x), 1000);
  })(i);
}
```

### ✅ Output

```
x 0
x 1
x 2
```

### 🔍 Why this works

* `var i` is **shared**
* IIFE creates a **new scope**
* `x` captures the value at that iteration

Each timeout remembers its own `x`.

### 🎯 Interview takeaway

> Closures remember variables, not values — unless we create a new scope.

---

## 6️⃣ `var` + setTimeout (classic closure bug)

```js
for (var z = 0; z < 3; z++) {
  setTimeout(() => console.log('z', z), 1000);
}
```

### ✅ Output

```
z 3
z 3
z 3
```

### ❌ Why this happens

* `var z` has **function scope**
* All callbacks share **same `z`**
* Loop finishes first → `z === 3`
* Timers run later

### 🧠 Internal behavior

```js
z = 0 → 1 → 2 → 3 (loop ends)
setTimeout callbacks execute
```

All callbacks see `z = 3`.

---

## ✅ How to FIX this (interview follow-up)

### ✔ Fix 1: Use `let`

```js
for (let z = 0; z < 3; z++) {
  setTimeout(() => console.log(z), 1000);
}
```

### ✔ Fix 2: Use IIFE (as shown above)

---

## 🧠 Summary Table (MEMORIZE THIS)

| Concept           | Key Rule                 |
| ----------------- | ------------------------ |
| `var` hoisting    | Declared → `undefined`   |
| Function hoisting | Fully hoisted            |
| `var` scope       | Function scope           |
| `let` scope       | Block scope              |
| Closure           | Remembers lexical scope  |
| setTimeout        | Runs after loop finishes |
| IIFE              | Creates new scope        |

---
 
Just say **NEXT** 🚀
