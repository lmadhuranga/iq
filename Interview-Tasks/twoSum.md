Yes ✅ **it is possible to solve Two Sum *without* using `new Map()`**, but there are **trade-offs**.
I’ll show **3 correct approaches**, explain **when to use which**, and also fix what’s wrong in your code.

 

# ✅ Solution 1: Using a **Plain Object** (No `Map`)

✔ Most common interview alternative
✔ O(n) time
✔ No `new Map()`

```js
function twoSum(nums, target) {
  const obj = {}; // plain object

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (obj[diff] !== undefined) {
      return [obj[diff], i];
    }

    obj[nums[i]] = i;
  }
}

const nums = [3, 2, 1, 5, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); // [1, 4] → 2 + 7
```

### Why this works

* Object keys act like a hash table
* Constant lookup time
* Same logic as `Map`

📌 **Interview note:**

> “We can replace `Map` with a plain object if keys are primitives.”
