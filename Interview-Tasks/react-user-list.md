```jsx 
import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const users = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 17 },
    { id: 3, name: "Charlie", age: 25 }
  ];

  // Task:
  // 1. Filter users whose age >= 18
  // 2. Sort them by age (ascending)
  // 3. Render the names in React

  // ✅ 1. Filter
  // ✅ 2. Sort
  const filteredSortedUsers = users
    .filter(user => user.age >= 18)
    .sort((a, b) => a.age - b.age);

  return (
    <div>
      <h1>Hello, World!</h1>

      <button onClick={() => setCount(count + 1)}>
        count {count}
      </button>

      <h2>Eligible Users</h2>
      <ul>
        {filteredSortedUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;



```
