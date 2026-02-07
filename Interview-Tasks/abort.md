
## ✅ 6) Stale props in async fetch (Race condition)

### ❓ Question

What bug can happen?

```jsx
useEffect(() => {
  fetch(`/api/user/${id}`)
    .then(r => r.json())
    .then(setUser);
}, [id]);
```

### ✅ Issue

Old request may finish later and overwrite latest user.

### ✅ Fix (AbortController)

```jsx
import React, { useEffect, useState, useCallback } from 'react'

function SimpleDebounce() {
  const [value, setValue] = useState('')
  const [data, setData] = useState([])

  const fetchData = useCallback(async (search, signal) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?name_like=${search}`,
        { signal }
      )
      const json = await res.json()
      setData(json)
    } catch (err) {
      // Ignore abort errors
      if (err.name !== 'AbortError') {
        console.error(err)
      }
    }
  }, [])

  useEffect(() => {
    if (!value) {
      setData([])
      return
    }

    const controller = new AbortController()

    const timer = setTimeout(() => {
      fetchData(value, controller.signal)
    }, 1000)

    return () => {
      clearTimeout(timer)
      controller.abort() // 🔥 abort previous request
    }
  }, [value, fetchData])

  return (
    <div>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Search..."
      />

      <ul>
        {data.map(user => (
          <li key={user.id}>{user?.name ?? ''}</li>
        ))}
      </ul>
    </div>
  )
}

export default SimpleDebounce
```

---

## 🔥 Interview One-Liner (Memorize)

> **“Stale closure happens when a function captures old state/props because dependencies are missing; fix it with dependencies, functional updates, or refs for async callbacks.”**

---
