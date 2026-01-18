
Perfect 👍
 
# 📘 React Interview  

---

## 🔹 1. React Basics

### - Why use React?

> React makes UI predictable, component-based, fast (Virtual DOM), and easy to scale.

---

### - Why should NOT use React for some projects ( Virtusa Question)?

> Angular is preferred for large enterprise applications due to its opinionated architecture, built-in tooling, and governance, while React—especially with Next.js—is preferred for SEO-friendly websites because of its efficient server-side rendering, performance, and flexible rendering strategies.

### **State Explosion** ReactJS

-   **State explosion** happens when too much state is stored globally and shared unnecessarily.
    
-   **React** is flexible, so in large apps state can easily grow uncontrollably if boundaries are not defined.
    
-   Overusing **Context or Redux** in React can cause excessive re-renders and complex dependencies.
    
-   **Angular** reduces state explosion by default using:
    
    -   Opinionated architecture
        
    -   Scoped services
        
    -   Module-based state separation
        
-   In **React**, developers must **manually control state boundaries**.
    
-   Best practice in React:
    
    -   Local UI state → `useState`
        
    -   Cross-feature state → Redux / Zustand
        
    -   Server state → React Query
        
-   **SEO-focused React apps** usually avoid state explosion because they are mostly read-only and stateless.
    
-   That’s why **Angular suits large enterprise systems**, while **React suits SEO-friendly and UI-heavy websites**.

---

### - Main features of React

* Component-based
* Virtual DOM
* One-way data flow
* Hooks
* Declarative UI

---

### - What is Virtual DOM functionality?

> The Virtual DOM lets React efficiently update the UI by comparing UI changes in memory and applying only the minimal updates to the real DOM.
---
```jsx
 State change → Virtual DOM diff → Minimal real DOM update 
 ```

### - Props vs State

| Props              | State              |
| ------------------ | ------------------ |
| Read-only          | Mutable            |
| Passed from parent | Owned by component |
| External           | Internal           |

---

### - What is `key` and why important?

> Keys help React identify which list items changed during re-render.

```jsx
items.map(item => <li key={item.id}>{item.name}</li>)
```

❌ Index as key breaks UI when list changes.

---


### - Controlled vs Uncontrolled Components (Enhanced)

-   **Controlled components**
    
    -   Input data is stored **inside the React component state**.
        
    -   React fully controls the value and updates UI on every change.
        
    -   Best for validation, dynamic forms, and predictable data flow.
        
-   **Uncontrolled components**
    
    -   Input data is stored **inside the DOM element itself**, not in React state.
        
    -   React reads or modifies the value using a `ref`.
        
    -   Often used when directly interacting with the DOM.
        
-   **Relation to `React.memo`**
    
    -   `React.memo` is **not related to controlled or uncontrolled inputs**.
        
    -   It only optimizes re-rendering based on props, regardless of input control type.
        
-   **Uncontrolled components & DOM manipulation (Examples)**
    
    -   Play / Pause button controlling a video element:
        
        ```js
        videoRef.current.play();
        ```
        
    -   File input:
        
        ```html
        <input type="file" ref={fileRef} />
        
        ```
        
    -   Focus an input field:
        
        ```js
        inputRef.current.focus();
        
        ```
        
    -   Reading value on submit:
        
        ```js
        inputRef.current.value;
        
        ```
        
-   **Summary**
    
    -   Controlled → React state controls data.
        
    -   Uncontrolled → DOM controls data, React accesses it via `ref`.
        
    -   `React.memo` is about **render optimization**, not input control.
---

### - Conditional rendering

```jsx
{isLoggedIn && <Dashboard />}
```

---

### - How to prevent re-rendering?

* `React.memo`
* `useMemo`
* `useCallback`
* Split components

---

### - What causes re-render?

* State change
* Props change
* Context change
* Parent re-render

---

### - How does React batch updates?

> React groups multiple state updates into one render for performance (automatic in React 18).

---

### - What is `React.memo()`?

> Prevents re-render if props don’t change.

---

### - What is `PureComponent`?

> Class version of `React.memo` (shallow compare).

---

## 🔹 3. State Management

### - What is state?

> State is data that controls component behavior and UI.

---

### - How does `useState` work?

> Returns state value + setter; setter triggers re-render.

---

### - Lifting state up

> Move shared state to nearest common parent.

---

### - Child → Parent data passing

```jsx
<Child onChange={setValue} />
```

---

### - Immutable state updates

```js
setUser({ ...user, age: 30 });
```

---

### - What if you mutate state directly?

> React won’t detect change → UI won’t update.

---

## 🔹 4. Hooks

### - What are Hooks?

> Hooks let function components use state and lifecycle features.

---

### - Rules of Hooks

* Only at top level
* Only in React functions

---

### - Why hooks introduced?

> To reuse logic and avoid complex class lifecycle methods.

---

### - `useEffect` without dependency array

> Runs after **every render** → can cause infinite loop.

---

### - `useEffect` dependency array

> Effect re-runs when dependency changes.

---

### - Cleanup function

```js
return () => clearInterval(id);
```

---

### - Missing dependency warning

> ESLint warns to prevent stale closures and bugs.

---

### - `useMemo`

> Memoizes **value**

---

### - `useCallback`

> Memoizes **function**

---

### - Difference `useMemo` vs `useCallback`

```js
useMemo(() => value, [])
useCallback(() => fn, [])
```

---

### - When NOT to use `useMemo`

> For cheap calculations or premature optimization.

---

### - `useCallback` traps

> Memoized function still re-created if dependencies change.

---

### - HOC

> Function that takes component and returns enhanced component.

---

### - `useRef`

> Stores mutable value without causing re-render.

---

### - `useRef` vs `useState`

| useRef       | useState  |
| ------------ | --------- |
| No re-render | Re-render |
| Mutable      | Immutable |

---

### - DOM access with `useRef`

```js
inputRef.current.focus();
```

---

### - Stale closure problem

> Function captures old state due to missing dependencies.

---

### - `forwardRef`

> Pass ref from parent to child.

---

### - `useReducer`

> Better for complex state logic.

---

### - `useReducer` vs `useState`

> Reducer = predictable, scalable.

---

### - `useContext` performance issue

> All consumers re-render when value changes.

---

### - Custom hooks – why?

> Reuse logic without repeating code.

---

## 🔹 5. Lifecycle (Class)

### - Deprecated lifecycle methods

* `componentWillMount`
* `componentWillReceiveProps`

---

### - Error boundary lifecycle

* `getDerivedStateFromError`
* `componentDidCatch`

---

## 🔹 6. Event Handling

### - Synthetic events

> Cross-browser wrapper around native events.

---

### - Event bubbling & capturing

> Events propagate child → parent unless stopped.

---

### - Passing arguments

```jsx
onClick={() => handleClick(id)}
```

---

### - Inline vs reference

> Inline creates new function every render.

---

### - Why arrow functions?

> Avoid `this` binding issues.

---

## 🔹 7. Lists, Keys & Forms

### - Rendering lists

```jsx
items.map(item => <Item key={item.id} />)
```

---

### - Index as key?

> ❌ Breaks UI on reorder/delete.

---

### - Debouncing inputs

> Delay execution until user stops typing.

---

## 🔹 8. Reconciliation & Virtual DOM

### - Reconciliation

> Process of comparing old and new Virtual DOM.

---

### - Why React is fast?

> Minimal DOM updates via diffing.

---

### - Keys help reconciliation

> Identify stable elements.

---

## 🔹 9. Performance Optimization

### - Optimize React

* Memoization
* Code splitting
* Virtualization

---

### - Lazy loading

```js
React.lazy(() => import('./Page'))
```

---

### - Throttling vs Debouncing

* Throttle → fixed interval
* Debounce → after pause

---

### - When React becomes slow?

> Large lists, heavy re-renders, bad context usage.

---

## 🔹 10. Routing

### - Client-side routing

> Navigation without page reload.

---

### - Protected routes

> Check auth before render.

---

## 🔹 11. Context API

### - When to use Context?

> Low-frequency global data (theme, auth).

---

### - Context vs Redux

> Context = simple, Redux = scalable.

---

### - Optimize Context

* Split contexts
* Memoize value

---

## 🔹 12. Redux

### - Why Redux?

> Centralized predictable state.

---

### - Core principles

* Single store
* Immutable updates
* Pure reducers

---

### - Redux Toolkit advantages

> Less boilerplate, safer, faster.

---

### - `createAsyncThunk`

> Handles async actions cleanly.

---

### - Redux middleware

> Intercepts actions (logger, thunk).

---

## 🔹 13. Data Fetching

### - Where to fetch?

> `useEffect` or React Query.

---

### - AbortController

> Cancels API calls on unmount.

---

### - Axios vs Fetch

> Axios simpler, Fetch native.

---

### - Polling vs WebSockets

* Polling → interval
* WebSocket → real-time

---

## 🔹 14. Error Handling

### - Error boundaries

> Catch render-time errors only.

---

### - Global error handling

> Central error UI + logging.

---

## 🔹 15. Testing

### - Why test React?

> Prevent regressions, ensure confidence.

---

### - Jest basics

> Test runner + assertions.

---

## 🔹 16. Advanced React

### - HOC vs Hooks

> Hooks are preferred now.

---

### - Compound components

> Shared internal state across components.

---

### - Concurrent rendering

> Interruptible rendering for better UX.

---

### - `useTransition`

> Mark non-urgent updates.

---

### - Server Components

> Render on server, reduce bundle size.

---

### - Hydration

> Attach events to SSR HTML.

---

### - SSR vs CSR vs SSG

| SSR      | CSR           | SSG      |
| -------- | ------------- | -------- |
| Fast SEO | Client render | Prebuilt |

---

## 🔹 17. React 18

* Automatic batching
* Concurrent features
* Streaming SSR

---

## 🔹 18. Security

### - Secure React apps

* XSS prevention
* Token handling
* Env vars

---

## 🔹 19. Architecture

### - Feature-based architecture

> Group by domain, not by type.

---

### - Micro-frontends

> Independent React apps combined.

---

## 🔹 20. Tricky Questions

### - State update async?

> Batched for performance.

---

### - `useEffect` runs twice?

> StrictMode dev-only check.

---

### - Infinite loop in `useEffect`?

> Updating dependency inside effect.

---

### - Why memo fails?

> Props reference changes.

---

## 🔹 21. Senior Scenarios

### - Large app design

> Feature-based + separation of state.

---

### - Permissions

> RBAC from backend.

---

### - Form-heavy apps

> React Hook Form + schema validation.

---

### - Real-time updates

> WebSockets + throttling.

---

### - Large lists

> Virtualization.

---

### - Debug performance

> React Profiler.

---

### - Multi-language apps

> i18n + lazy-loaded translations.

---

## 🧠 FINAL MEMORY LINE (IMPORTANT)

```
React = UI
Redux/Zustand = App State
React Query = Server State
``` 
