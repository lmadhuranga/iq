import React from 'react';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const users = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 17 },
    { id: 3, name: "Charlie", age: 25 }
  ];
  
   
// Task:
// 1. Filter users whose age >= 18
// 2. Sort them by age (ascending)
// 3. Render the names in React
  

  return (
    <div>
      <h1>Hello, World!</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count {count}
        </button>
      </div>
    </div>
  )
}

export default App
