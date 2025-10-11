## 💬 Top JavaScript Closure Interview Questions & Answers

----------

### **Q1. What is a closure in JavaScript?**

🧠 **Answer:**  
A **closure** is a function that remembers the variables from its **outer scope**, even after the outer function has finished executing.

📘 Example:

```js
function outer() {
  let name = "Rohit";
  return function inner() {
    console.log("Hello " + name);
  };
}
const greet = outer();
greet(); // Output: Hello Rohit

```

✅ **Explanation:**  
The inner function keeps a reference to `name` even though `outer()` has completed — that’s a closure.

----------

### **Q2. Why are closures used in JavaScript?**

🧠 **Answer:**  
Closures are used for:

1.  **Data privacy / encapsulation** (creating private variables)
    
2.  **Maintaining state** in asynchronous or callback-based code
    
3.  **Function factories** (functions returning other functions)
    
4.  **Module patterns** for better code organization
    

📘 Example (private variable):

```js
function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const add = counter();
console.log(add()); // 1
console.log(add()); // 2

```

----------

### **Q3. What will be the output of this code?**

```js
function createCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
counter1(); // ?
counter1(); // ?
const counter2 = createCounter();
counter2(); // ?

```

✅ **Output:**

```
1
2
1

```

🧩 **Explanation:**  
Each call to `createCounter()` creates a **new closure with its own `count` variable**.

----------

### **Q4. How do closures help in data hiding?**

🧠 **Answer:**  
They allow us to expose **only what we need**, keeping variables private.

📘 Example:

```js
function bankAccount() {
  let balance = 1000;

  return {
    deposit: function(amount) { balance += amount; },
    getBalance: function() { return balance; }
  };
}

const account = bankAccount();
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.balance); // undefined ❌

```

----------

### **Q5. What will this code print and why?**

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

```

✅ **Output:**

```
4
4
4

```

🧩 **Explanation:**

-   `var` is function-scoped, so all three functions share the same variable `i`.
    
-   By the time `setTimeout` executes, the loop has finished and `i = 4`.
    

✅ **Fix using closure or `let`:**

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

```

Output:

```
1
2
3

```

----------

### **Q6. Can closures cause memory leaks?**

🧠 **Answer:**  
Yes, if a closure **holds references** to large unused variables,  
they won’t be garbage collected, which can lead to memory leaks.

✅ **Avoid by:**

-   Setting unused variables to `null`
    
-   Avoiding unnecessary long-lived closures
    

----------

### **Q7. Example of closure in async code**

📘 Example:

```js
function delayedLog(name) {
  setTimeout(function() {
    console.log("Hello " + name);
  }, 2000);
}

delayedLog("Manisha");

```

✅ The anonymous function inside `setTimeout` **remembers** the variable `name`.

----------

### **Q8. Difference between closure and scope?**

Concept

Description

**Scope**

Defines what variables are accessible at a given point in code.

**Closure**

A function that remembers variables from its outer scope even after the scope has closed.

----------

### **Q9. How do closures work inside React Hooks (like useState)?**

React Hooks rely on closures to remember values between renders.

📘 Example:

```js
function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1); // closure over `count`
  }

  return <button onClick={increment}>Count: {count}</button>;
}

```

✅ Each render creates a new closure, and React updates the `count` value internally.

----------

### **Q10. Bonus: Tricky Closure Output**

```js
function x() {
  var a = 10;
  return function y() {
    console.log(a);
  };
}

var z = x();
z();

```

✅ Output: `10`  
Even though `x()` has returned, `y()` still has access to variable `a`.

----------

## 🧩 Summary Table 
----------

![enter image description here](https://raw.githubusercontent.com/lmadhuranga/iq/refs/heads/main/temp/couser-summery.png)

Would you like me to give you a **“10-Question Closure Quiz”** (with multiple choice & reasoning after each) — the kind often used in **frontend interviews** (Meta, Google, Amazon, etc.)?