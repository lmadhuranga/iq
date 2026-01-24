Interview question set tailored for ReactJS + NestJS + Node.js + MongoDB, the kind interviewers use to separate senior engineers from mid-level devs. These are concept + real-world + architecture focused 👇

## 🔷 ReactJS (Senior Level)

### Architecture & Design

1. How do you decide **component boundaries** in a large React application?
2. When would you **avoid Redux** and use Context / Zustand instead?
3. Explain **container vs presentational components** — is it still relevant?
4. How do you structure a **scalable React folder architecture**?
5. How do you handle **cross-cutting concerns** (auth, logging, feature flags)?

### Performance

6. How does React’s **reconciliation algorithm** work?
7. When do you use `useMemo`, `useCallback`, and when do you **avoid them**?
8. How do you prevent **unnecessary re-renders** in large lists?
9. Explain **React concurrent rendering** and why it matters.
10. How do you optimize **LCP, CLS, TTI** in React apps?

### Hooks & Internals

11. How does `useEffect` cleanup work internally?
12. What problems does `useRef` solve beyond DOM access?
13. How would you implement a **custom hook for API polling**?
14. Difference between **controlled vs uncontrolled components**.
15. Why is calling hooks conditionally dangerous?

### SSR / Advanced

16. Differences between **CSR, SSR, SSG, ISR**.
17. Common hydration issues in SSR apps and fixes.
18. How do you manage auth securely in SSR apps?
19. How would you design **role-based UI authorization**?
20. How do you handle **feature toggles** in frontend apps?

---

## 🔷 Node.js (Senior Level)

### Core Concepts

21. Explain the **Node.js event loop phases**.
22. When does Node.js actually use **multiple threads**?
23. Difference between `process.nextTick`, `setImmediate`, `setTimeout`.
24. How does Node handle **high concurrency** with a single thread?
25. What causes **event loop blocking** and how do you detect it?

### Architecture

26. How do you design a **scalable Node.js backend**?
27. Monolith vs Microservices — trade-offs?
28. How do you handle **graceful shutdowns**?
29. How do you structure a Node project for **enterprise scale**?
30. How do you manage **config & secrets** across environments?

### Security

31. Common Node.js security vulnerabilities.
32. How do you protect APIs from **rate limiting & abuse**?
33. How do you handle **JWT refresh tokens** securely?
34. How do you prevent **NoSQL injection**?
35. How do you secure file uploads?

### Performance & Reliability

36. How do you implement **caching** (Redis / memory)?
37. How do you handle **backpressure**?
38. How do you debug memory leaks?
39. How do you scale Node apps horizontally?
40. How do you monitor Node apps in production?

---

## 🔷 NestJS (Senior Level)

### Fundamentals

41. Why NestJS over Express/Fastify?
42. Explain **dependency injection** in NestJS.
43. Lifecycle of a NestJS request.
44. Difference between **guards, interceptors, pipes, filters**.
45. When do you write **custom decorators**?

### Architecture

46. How do you structure a **large NestJS application**?
47. How do you design **module boundaries**?
48. How do you share logic between microservices?
49. How do you implement **API versioning**?
50. How do you handle **multi-tenant architecture** in NestJS?

### Advanced

51. How do interceptors work internally?
52. How do you implement **role-based access control (RBAC)**?
53. How do you handle **global error handling**?
54. How do you integrate **Kafka / RabbitMQ**?
55. How do you write **custom middleware vs interceptor**?

---

## 🔷 MongoDB (Senior Level)

### Data Modeling

56. How do you design schemas for **high-read vs high-write** apps?
57. Embed vs Reference — how do you decide?
58. How do you model **many-to-many relationships**?
59. How do you handle schema evolution?
60. How do you prevent unbounded document growth?

### Performance

61. How do indexes work internally?
62. Compound index vs single index?
63. How do you debug slow queries?
64. How does MongoDB handle transactions?
65. When would MongoDB be a bad choice?

### Scaling & Reliability

66. Replica sets vs sharding.
67. How do you handle failover?
68. How do you design pagination efficiently?
69. How do you ensure data consistency?
70. How do you backup & restore MongoDB safely?

---

## 🔷 System Design (Senior Must-Have)

71. Design a **high-traffic REST API** using NestJS + MongoDB.
72. Design an **auth system** (login, refresh, revoke).
73. How would you design a **real-time notification system**?
74. How do you design a **multi-tenant SaaS platform**?
75. How do you handle **event-driven architecture**?
76. How do you ensure idempotency in APIs?
77. How do you design **rate-limited APIs**?
78. How do you handle **eventual consistency**?
79. How do you design a **zero-downtime deployment**?
80. How do you migrate a monolith to microservices?

---

## 🔥 Bonus “Senior Signal” Questions

81. What was the **hardest production issue** you fixed?
82. A bad architectural decision you made — and what you learned.
83. How do you review PRs as a senior?
84. How do you mentor juniors?
85. How do you balance **speed vs quality**?
86. How do you push back on bad requirements?
87. How do you measure success of a system you built?

---
