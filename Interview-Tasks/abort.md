
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
useEffect(() => {
  const controller = new AbortController();

  fetch(`/api/user/${id}`, { signal: controller.signal })
    .then(r => r.json())
    .then(setUser)
    .catch(e => {
      if (e.name !== "AbortError") throw e;
    });

  return () => controller.abort();
}, [id]);
```

---

## 🔥 Interview One-Liner (Memorize)

> **“Stale closure happens when a function captures old state/props because dependencies are missing; fix it with dependencies, functional updates, or refs for async callbacks.”**

---
