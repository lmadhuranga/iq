
## **Q33. What is Suspense?**

**Suspense** is a React feature for handling **lazy loading and async states** (loading, waiting).

👉 It shows a **fallback UI** while something is loading.

---

### Example – Lazy loading a component

```jsx
import React, { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}
```

### What happens

* React pauses rendering
* Shows fallback (`Loading...`)
* Renders component when ready

---

### Suspense with data (concept)

```jsx
<Suspense fallback={<Spinner />}>
  <UserProfile />
</Suspense>
```

Used with:

* Concurrent rendering
* Streaming SSR
* Async data fetching (framework-level)

### Interview one-liner

> **Suspense lets React pause rendering and show a fallback UI while components or data are loading.**

---

## 🔥 Quick Comparison (Interview Gold)

| Feature              | Purpose                              |
| -------------------- | ------------------------------------ |
| Fiber                | Internal engine enabling concurrency |
| Concurrent Rendering | Interruptible, prioritized rendering |
| Suspense             | Handles loading & async UI states    |

---
