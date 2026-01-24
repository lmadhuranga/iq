Below are **VERY SHORT, senior-level answers** — **1–2 lines each**, exactly how interviewers expect.
You can **memorize + speak confidently**.

---

# 🔷 ReactJS – Senior (Short Answers)

### Architecture & Design

**1. Component boundaries**
👉 Split by **feature & responsibility**; keep components small, cohesive, and reusable.

**2. Avoid Redux when?**
👉 When state is simple or localized; use Context/Zustand to reduce boilerplate.

**3. Container vs Presentational – still relevant?**
👉 Conceptually yes, but hooks now replace most container components.

**4. Scalable React folder structure**
👉 Feature-based (modules), not type-based; each feature owns its logic.

**5. Cross-cutting concerns**
👉 Handle via providers, hooks, middleware, and shared services — not inside features.

---

### Performance

**6. Reconciliation algorithm**
👉 React diffs Virtual DOM trees to update only changed nodes efficiently.

**7. `useMemo` / `useCallback` — when?**
👉 Use for expensive computations or stable props; avoid premature optimization.

**8. Prevent re-renders in large lists**
👉 Virtualization, `React.memo`, stable keys, local state.

**9. Concurrent rendering**
👉 Allows React to prioritize urgent updates and keep UI responsive.

**10. Optimize LCP, CLS, TTI**
👉 Code splitting, SSR/SSG, image optimization, lazy loading.

---

### Hooks & Internals

**11. `useEffect` cleanup**
👉 Cleanup runs before next effect or on unmount.

**12. `useRef` beyond DOM**
👉 Store mutable values without causing re-renders.

**13. Custom API polling hook**
👉 Use `useEffect` + `setInterval` with cleanup and dependency control.

**14. Controlled vs uncontrolled**
👉 Controlled uses React state; uncontrolled uses DOM state.

**15. Conditional hooks — why bad?**
👉 Breaks hook call order, causing bugs.

---

### SSR / Advanced

**16. CSR vs SSR vs SSG vs ISR**
👉 CSR: client only | SSR: per request | SSG: build time | ISR: incremental rebuilds.

**17. Hydration issues**
👉 Caused by server/client mismatch; fix with consistent rendering.

**18. Secure auth in SSR**
👉 Use HTTP-only cookies and server-side validation.

**19. Role-based UI auth**
👉 Central permission checks + route guards + conditional rendering.

**20. Feature toggles**
👉 Use centralized config or remote flags, not hard-coded logic.

---

# 🔷 Node.js – Senior (Short Answers)

### Core Concepts

**21. Event loop phases**
👉 Timers → I/O → idle → poll → check → close callbacks.

**22. Multiple threads in Node**
👉 Via libuv thread pool for I/O and worker threads.

**23. `nextTick` vs `setImmediate` vs `setTimeout`**
👉 `nextTick` runs first, `setImmediate` after I/O, `setTimeout` after delay.

**24. High concurrency**
👉 Non-blocking I/O + event loop.

**25. Event loop blocking**
👉 CPU-heavy tasks; detect via profiling and lag monitoring.

---

### Architecture

**26. Scalable backend design**
👉 Modular structure, stateless services, caching, horizontal scaling.

**27. Monolith vs Microservices**
👉 Monolith = simple; Microservices = scalable but complex.

**28. Graceful shutdowns**
👉 Listen to signals, stop accepting traffic, close resources.

**29. Enterprise project structure**
👉 Layered or modular with clear boundaries.

**30. Config & secrets**
👉 Env vars + secret managers (Vault, AWS Secrets).

---

### Security

**31. Common vulnerabilities**
👉 XSS, CSRF, injection, insecure headers.

**32. Rate limiting**
👉 API gateway or middleware + Redis.

**33. JWT refresh tokens**
👉 Short-lived access token, stored refresh token, rotation.

**34. NoSQL injection prevention**
👉 Input validation and query sanitization.

**35. Secure file uploads**
👉 Validate type/size, store outside public paths.

---

### Performance & Reliability

**36. Caching**
👉 Redis for shared cache, memory for local cache.

**37. Backpressure**
👉 Streams, queues, and rate limiting.

**38. Debug memory leaks**
👉 Heap snapshots, profiling, GC analysis.

**39. Horizontal scaling**
👉 Stateless apps + load balancer.

**40. Monitoring**
👉 Logs, metrics, tracing (Prometheus, ELK).

---

# 🔷 NestJS – Senior (Short Answers)

**41. Why NestJS?**
👉 Opinionated architecture, DI, scalability.

**42. Dependency Injection**
👉 Providers injected via constructor.

**43. Request lifecycle**
👉 Middleware → Guard → Pipe → Controller → Interceptor → Response.

**44. Guards vs Pipes vs Interceptors vs Filters**
👉 Auth | validation | transform | error handling.

**45. Custom decorators**
👉 For reusable metadata and cleaner controllers.

**46. Large app structure**
👉 Domain-based modules.

**47. Module boundaries**
👉 One business capability per module.

**48. Share logic between services**
👉 Shared libraries or packages.

**49. API versioning**
👉 URI or header-based versioning.

**50. Multi-tenancy**
👉 Tenant context via middleware + scoped providers.

**51. Interceptors internally**
👉 Wrap method execution (before/after).

**52. RBAC**
👉 Guards + metadata + role mapping.

**53. Global error handling**
👉 Exception filters.

**54. Kafka / RabbitMQ integration**
👉 Microservices module + message patterns.

**55. Middleware vs Interceptor**
👉 Middleware before route, interceptor around handler.

---

# 🔷 MongoDB – Senior (Short Answers)

**56. High-read vs high-write schema**
👉 Read: denormalize | Write: normalize.

**57. Embed vs Reference**
👉 Embed for read performance, reference for flexibility.

**58. Many-to-many**
👉 Reference IDs or junction collection.

**59. Schema evolution**
👉 Versioning + backward compatibility.

**60. Unbounded growth prevention**
👉 TTL, pagination, data archiving.

**61. Indexes**
👉 Speed up reads, slow writes.

**62. Compound vs single index**
👉 Compound supports multiple query fields.

**63. Debug slow queries**
👉 `explain()` and profiler.

**64. Transactions**
👉 Supported via replica sets.

**65. When MongoDB is bad**
👉 Strong relational joins needed.

**66. Replica sets vs sharding**
👉 HA vs horizontal scaling.

**67. Failover**
👉 Automatic primary election.

**68. Pagination**
👉 Cursor-based, not offset-based.

**69. Data consistency**
👉 Transactions and proper write concerns.

**70. Backup & restore**
👉 `mongodump`, snapshots, tested restores.

---

# 🔷 System Design – One-Line Answers

**71. High-traffic API**
👉 Stateless NestJS + MongoDB + cache + load balancer.

**72. Auth system**
👉 JWT + refresh tokens + revocation.

**73. Real-time notifications**
👉 WebSockets + message queue.

**74. Multi-tenant SaaS**
👉 Tenant isolation + shared infrastructure.

**75. Event-driven architecture**
👉 Producers, consumers, message broker.

**76. Idempotency**
👉 Idempotency keys.

**77. Rate-limited APIs**
👉 Token bucket + Redis.

**78. Eventual consistency**
👉 Async events + retries.

**79. Zero-downtime deployment**
👉 Blue-green or rolling deployments.

**80. Monolith → Microservices**
👉 Strangler pattern.

---

# 🔥 Senior Signal (Short)

**81. Hardest issue**
👉 Production performance or data corruption bug.

**82. Bad decision learned**
👉 Over-engineering early.

**83. PR reviews**
👉 Focus on correctness, readability, and impact.

**84. Mentoring**
👉 Code reviews + pair programming.

**85. Speed vs quality**
👉 Ship fast but protect core quality.

**86. Push back requirements**
👉 Explain trade-offs with data.

**87. Measure success**
👉 Performance, reliability, business impact.

---
