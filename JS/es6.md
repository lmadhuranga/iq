Some ES6 features with examples:

1. Arrow Functions:
```javascript
// Traditional Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const add = (a, b) => a + b;
```

2. Let and Const:
```javascript
let x = 10; // mutable variable
const PI = 3.14; // constant variable
```

3. Classes:
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person('Alice', 30);
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
```

4. Template Literals:
```javascript
const name = 'John';
const age = 25;

const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // Output: Hello, my name is John and I am 25 years old.
```

5. Destructuring Assignment:
```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

6. Default Parameters:
```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet('Alice'); // Output: Hello, Alice!
```

7. Spread Operator:
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```

8. Rest Parameters:
```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
```

These are just a few examples of ES6 features. ES6 introduced many more enhancements to JavaScript that have greatly improved the language and made it more efficient and expressive.
