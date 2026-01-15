Got it 👍
These are **real flyd-style senior React + JavaScript interview questions**.
I’ll answer **ONE BY ONE**, clearly explaining:

* ✅ **What is wrong**
* ✅ **What happens (output / behavior)**
* ✅ **Why**
* ✅ **Correct / best practice**

I’ll also mark **INTERVIEW KEY POINT** so you know what to say.

---

## ✈️ flyd Interview – Detailed Answers

(React + JavaScript Advanced)

---

## 1️⃣ Question 1 – Child re-render & handler definition

```jsx
const Child = {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
});

const Parent = () => {
  const handleClick = {
    console.log("clicked");
  }, []);

  return <Child onClick={handleClick} />;
};
```

### ❌ Problems

1. `Child` is **not a component**
2. `handleClick` is **not a function**
3. `useCallback` syntax is missing
4. `onClick` is **undefined inside Child**

### ✅ Correct Version

```jsx
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
});

const Parent = () => {
  const handleClick = React.useCallback(() => {
    console.log("clicked");
  }, []);

  return <Child onClick={handleClick} />;
};
```

### 🎯 Interview Key Point

* Functions must be memoized using `useCallback`
* Child must receive props correctly
* `React.memo` prevents unnecessary re-renders **only if props reference is stable**

---

## 2️⃣ Question 2 – Wrong `useCallback` usage

```jsx
const Child = useCallback({
  console.log("Child rendered");
  return<button onClick = { onClick }>Click</button>;
});
```

### ❌ What’s wrong

* `useCallback` **cannot wrap a component**
* Hooks only work **inside components**
* `onClick` is undefined

### ✅ Correct Way

```jsx
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
});
```

### 🎯 Interview Key Point

> `useCallback` is for **functions**, not components
> `React.memo` is for **components**

---

## 3️⃣ Question 3 – Multiple `setState`

```jsx
const handleClick = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
};
```

### ✅ Output

```
count increases by 1
```

### ❓ Why

* React **batches state updates**
* All three use the **same stale value of `count`**

### ✅ Correct Way

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

### 🎯 Interview Key Point

> Always use **functional updates** when new state depends on old state

---

## 4️⃣ Question 4 – `React.memo` not working

```jsx
<Child user={{ name: "John" }} />
```

### ❌ Why Child still re-renders

* `{ name: "John" }` creates a **new object every render**
* Reference changes → memo breaks

### ✅ Fix

```jsx
const user = React.useMemo(() => ({ name: "John" }), []);
<Child user={user} />
```

### 🎯 Interview Key Point

> `React.memo` uses **shallow comparison**
> Objects & arrays must be memoized

---

## 5️⃣ Question 5 – Using `index` as key

```jsx
items.map((item, index) => (
  <Input key={index} value={item.value} />
))
```

### ❌ What happens

* UI bugs on insert/delete/reorder
* Wrong input values
* Performance issues

### ✅ Best Practice

```jsx
<Input key={item.id} value={item.value} />
```

### 🎯 Interview Key Point

> Index as key is unsafe when list order changes

---

## 6️⃣ Question – Why `count` stays 0 in `setInterval`

```jsx
React.useEffect(() => {
  const id = setInterval(() => {
    console.log(count);
  }, 1000);
}, []);
```

### ✅ Output

```
0 0 0 0 ...
```

### ❓ Why

* `useEffect` runs **once**
* Closure captures initial `count = 0`

### ✅ Fix (useRef)

```jsx
const countRef = React.useRef(count);

useEffect(() => {
  countRef.current = count;
});

useEffect(() => {
  const id = setInterval(() => {
    console.log(countRef.current);
  }, 1000);
  return () => clearInterval(id);
}, []);
```

### 🎯 Interview Key Point

> This is a **closure trap**
> `useRef` avoids stale closures

---

## 7️⃣ Question – `var` + closure output

```js
for (var i = 0; i < 3; i++) {
  ((x) => {
    setTimeout(() => console.log(x), 1000);
  })(i);
}
```

### ✅ Output

```
0
1
2
```

### ❓ Why

* IIFE creates a new scope
* `x` captures the value

### 🎯 Interview Key Point

> IIFE or `let` fixes closure issues with `var`

---

## 8️⃣ Hoisting – Output

```js
var a = 0
function hello () {
  var a = 10
  console.log(a)
}
hello()
```

### ✅ Output

```
10
```

### ❓ Why

* Function scope variable shadows global

---

## 9️⃣ Hoisting – Function call

```js
console.log(foo);
console.log(foo());

function foo () {
  console.log('hello');
}
```

### ✅ Output

```
ƒ foo() { ... }
hello
undefined
```

### 🎯 Interview Key Point

> Function declarations are **fully hoisted**

---

## 🔟 Hoisting – `var`

```js
console.log(h);
var h = 0;
```

### ✅ Output

```
undefined
```

### ❓ Why

* Declaration hoisted
* Initialization not hoisted

---

## 🔒 Closure – One-line Interview Definition

> A closure is a function that remembers variables from its lexical scope even after the outer function has finished execution.

---

## ✅ flyd Interview Focus Areas

They test:

* React re-render behavior
* Closures & stale state
* Memoization correctness
* Hoisting & execution order
* Real production bugs

---
 
