```js
function myFunction() {
    setTimeout(()=>console.log(`settime===` , x),0);
    console.log(`x2 `, x );
    var x = 40;
    console.log('x3 ', x); 
}

x = 30;
myFunction()

console.log('x4 ' ,x)

/*
	Output
	x2  undefined
	x3  40
	x4  30
	settime=== 40
*/
```

```
function heavy() {
  // heavy work here
  new Array(1e6).fill("data");

  return function () {
    console.log("using data");
  };
}
```


Alright — here are **full solutions step-by-step** (with clean recursion + explanations + complexity).
I’ll keep each one **interview-ready**.

---

## 1) Deep Object Sum

### ✅ Goal

Sum all numbers inside nested objects.

### Steps

1. Start `sum = 0`
2. Loop keys
3. If value is number → add
4. If value is object/array → recurse

```js
function deepSum(value) {
  let sum = 0;

  if (typeof value === "number") return value;

  if (value && typeof value === "object") {
    for (const key in value) {
      sum += deepSum(value[key]);
    }
  }

  return sum;
}

// Test
const data = { a: 1, b: { c: 2, d: { e: 3, f: 4 } }, g: 5 };
console.log(deepSum(data)); // 15
```

**Time:** O(n) over all nodes
**Space:** O(depth)

---

## 2) Flatten Deep Array

### Steps

1. Create `result`
2. For each item:

   * If array → recurse and push results
   * Else push item

```js
function flattenDeep(arr) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenDeep(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenDeep([1, [2, [3, [4, 5]]], 6])); // [1,2,3,4,5,6]
```

**Time:** O(n)
**Space:** O(n) result + O(depth) stack

---

## 3) Maximum Depth of Nested Array

### Steps

1. If not array → depth = 0
2. Depth of array = `1 + max(depth(child))`

```js
function maxArrayDepth(arr) {
  if (!Array.isArray(arr)) return 0;

  let maxChild = 0;
  for (const item of arr) {
    maxChild = Math.max(maxChild, maxArrayDepth(item));
  }
  return 1 + maxChild;
}

console.log(maxArrayDepth([1, [2, [3, [4]]]])); // 4
```

**Time:** O(n)
**Space:** O(depth)

---

## 4) String Permutations (Hard)

### Steps

1. Base case: length <= 1 → return [str]
2. Pick each char as “fixed”
3. Permute the rest
4. Combine fixed + each sub-permutation

```js
function permutations(str) {
  if (str.length <= 1) return [str];

  const result = [];
  for (let i = 0; i < str.length; i++) {
    const fixed = str[i];
    const rest = str.slice(0, i) + str.slice(i + 1);
    const restPerms = permutations(rest);

    for (const p of restPerms) {
      result.push(fixed + p);
    }
  }
  return result;
}

console.log(permutations("abc")); // 6 permutations
```

**Time:** O(n!)
**Space:** O(n!) output (dominant)

> Interview note: mention factorial blow-up + maybe dedupe if duplicates exist.

---

## 5) Power Set (All Subsets)

### Steps

1. Base case: end of array → push current subset
2. Two choices each index:

   * exclude
   * include

```js
function subsets(nums) {
  const result = [];

  function backtrack(index, path) {
    if (index === nums.length) {
      result.push([...path]);
      return;
    }

    // Exclude
    backtrack(index + 1, path);

    // Include
    path.push(nums[index]);
    backtrack(index + 1, path);
    path.pop(); // undo
  }

  backtrack(0, []);
  return result;
}

console.log(subsets([1, 2, 3]));
```

**Time:** O(2^n)
**Space:** O(n) recursion (plus output)

---

## 6) Flat Comments → Nested Tree (Real world)

### Steps (best approach)

1. Build a map: `id -> node { ...comment, children: [] }`
2. Loop again:

   * if parentId null → root
   * else push into parent.children

```js
function buildCommentTree(comments) {
  const map = new Map();
  const roots = [];

  // 1) Create all nodes
  for (const c of comments) {
    map.set(c.id, { ...c, children: [] });
  }

  // 2) Link children
  for (const c of comments) {
    const node = map.get(c.id);

    if (c.parentId == null) {
      roots.push(node);
    } else {
      const parent = map.get(c.parentId);
      if (parent) parent.children.push(node);
      else roots.push(node); // fallback if parent missing
    }
  }

  return roots;
}

const comments = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 }
];

console.log(buildCommentTree(comments));
```

**Time:** O(n)
**Space:** O(n)

---

## 7) Basic `JSON.stringify` (Hard)

### Steps

Handle types:

* `null` → `"null"`
* number/boolean → string
* string → quoted
* array → `[...]` recursively
* object → `{ "k": value }` recursively
* skip `undefined` / functions (like JSON does)

```js
function myStringify(value) {
  if (value === null) return "null";

  const t = typeof value;

  if (t === "number") return Number.isFinite(value) ? String(value) : "null";
  if (t === "boolean") return value ? "true" : "false";
  if (t === "string") return `"${value.replace(/"/g, '\\"')}"`;

  if (t === "undefined" || t === "function" || t === "symbol") {
    return undefined; // matches JSON behavior inside objects
  }

  // Arrays
  if (Array.isArray(value)) {
    const parts = value.map((v) => {
      const s = myStringify(v);
      return s === undefined ? "null" : s; // arrays convert undefined to null
    });
    return `[${parts.join(",")}]`;
  }

  // Objects
  if (t === "object") {
    const parts = [];
    for (const key of Object.keys(value)) {
      const v = myStringify(value[key]);
      if (v !== undefined) {
        parts.push(`"${key}":${v}`);
      }
    }
    return `{${parts.join(",")}}`;
  }

  return undefined;
}

// Test
console.log(myStringify({ a: 1, b: { c: 2 }, x: undefined, f: () => {} }));
// {"a":1,"b":{"c":2}}
```

**Time:** O(n) over structure
**Space:** O(depth) + output size

---

## 8) Recursive Binary Search

### Steps

1. Base: low > high → -1
2. mid = (low+high)//2
3. If match → mid
4. Else go left/right

```js
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) return -1;

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) return mid;
  if (target < arr[mid]) return binarySearch(arr, target, low, mid - 1);
  return binarySearch(arr, target, mid + 1, high);
}

console.log(binarySearch([1,2,3,4,5,6,7], 5)); // 4
```

**Time:** O(log n)
**Space:** O(log n) recursion

---

## 9) Deep Clone (No JSON trick)

### Steps

1. If primitive/null → return as is
2. If array → clone each item recursively
3. If object → clone each key recursively
4. Use WeakMap to avoid circular crash

```js
function deepClone(value, seen = new WeakMap()) {
  if (value === null || typeof value !== "object") return value;

  if (seen.has(value)) return seen.get(value);

  if (Array.isArray(value)) {
    const arr = [];
    seen.set(value, arr);
    for (const item of value) arr.push(deepClone(item, seen));
    return arr;
  }

  const obj = {};
  seen.set(value, obj);
  for (const key of Object.keys(value)) {
    obj[key] = deepClone(value[key], seen);
  }
  return obj;
}

// Test
const o = { a: 1, b: { c: 2 } };
o.self = o; // circular
const copy = deepClone(o);
console.log(copy.b.c); // 2
console.log(copy.self === copy); // true
```

**Time:** O(n)
**Space:** O(n)

---

## 10) Recursion + Closure: Count Recursive Calls

### Steps

1. Create closure counter
2. Recursive walk function increments counter each call
3. Return both result and count

Example: count nodes in nested array and also count recursion calls.

```js
function createCounter() {
  let calls = 0;

  function walk(value) {
    calls++;

    if (Array.isArray(value)) {
      let total = 0;
      for (const item of value) total += walk(item);
      return total;
    }

    if (typeof value === "number") return 1; // count numbers
    return 0;
  }

  return function run(input) {
    calls = 0;
    const numbersCount = walk(input);
    return { numbersCount, calls };
  };
}

const fn = createCounter();
console.log(fn([1, [2, [3]]])); 
// example output: { numbersCount: 3, calls: ... }
```

**Time:** O(n)
**Space:** O(depth)

---

If you want, I can turn these into **10 practice tasks** (like an interview) where you solve and I review your code, or I can give you **even harder recursion** (DFS maze, backtracking, Sudoku-lite).

