Here are **real-world HOC (Higher-Order Component) scenarios** in **React**, explained **practically** the way they appear in production apps 👇

---

## 1️⃣ Authentication / Authorization (Most common)

### 🔹 Scenario

Only **logged-in users** or **admins** can access certain pages.

### 🔹 Real-world use

* Admin Dashboard
* User Profile
* Payment Page

### 🔹 HOC Example

```jsx
const withAuth = (WrappedComponent) => {
  return function AuthComponent(props) {
    const isLoggedIn = localStorage.getItem("token");

    if (!isLoggedIn) {
      return <h2>Access Denied. Please Login.</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};
```

### 🔹 Usage

```jsx
export default withAuth(Dashboard);
```

✅ **Why HOC?**
Authentication logic reused across many pages.

---

## 2️⃣ Role-Based Access Control (RBAC)

### 🔹 Scenario

Different UI for **Admin**, **Manager**, **User**

### 🔹 Real-world use

* Fintech dashboards
* Enterprise CMS
* HR portals

### 🔹 HOC Example

```jsx
const withRole = (allowedRoles) => (WrappedComponent) => {
  return function RoleComponent(props) {
    const role = "ADMIN"; // from token / API

    if (!allowedRoles.includes(role)) {
      return <h3>Unauthorized</h3>;
    }

    return <WrappedComponent {...props} />;
  };
};
```

### 🔹 Usage

```jsx
export default withRole(["ADMIN", "MANAGER"])(AdminPanel);
```

---

## 3️⃣ Logging & Analytics Tracking

### 🔹 Scenario

Track **page views**, **button clicks**, **screen opens**

### 🔹 Real-world use

* Google Analytics
* Mixpanel
* Custom event tracking

### 🔹 HOC Example

```jsx
const withLogger = (WrappedComponent) => {
  return function LoggerComponent(props) {
    useEffect(() => {
      console.log("Component Mounted:", WrappedComponent.name);
    }, []);

    return <WrappedComponent {...props} />;
  };
};
```

### 🔹 Usage

```jsx
export default withLogger(HomePage);
```

✅ No analytics code inside UI components

---

## 4️⃣ Loading Spinner / Skeleton Handling

### 🔹 Scenario

Show loader while API data is loading

### 🔹 Real-world use

* Product lists
* Dashboards
* Reports

### 🔹 HOC Example

```jsx
const withLoader = (WrappedComponent) => {
  return function LoaderComponent({ loading, ...props }) {
    if (loading) {
      return <h3>Loading...</h3>;
    }
    return <WrappedComponent {...props} />;
  };
};
```

### 🔹 Usage

```jsx
export default withLoader(UserList);
```

---

## 5️⃣ Error Boundary Wrapper

### 🔹 Scenario

Prevent whole app crash due to one component error

### 🔹 Real-world use

* Production apps
* Micro-frontend systems

### 🔹 HOC Example

```jsx
const withErrorBoundary = (WrappedComponent) => {
  return class extends React.Component {
    state = { hasError: false };

    componentDidCatch() {
      this.setState({ hasError: true });
    }

    render() {
      if (this.state.hasError) {
        return <h2>Something went wrong</h2>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};
```

---

## 6️⃣ Theme / Dark Mode Injection

### 🔹 Scenario

Apply theme logic to many components

### 🔹 Real-world use

* Dark / Light mode
* Brand theming

### 🔹 HOC Example

```jsx
const withTheme = (WrappedComponent) => {
  return function ThemeComponent(props) {
    const theme = "dark";
    return <WrappedComponent theme={theme} {...props} />;
  };
};
```

---

## 7️⃣ API Data Fetching (Old but still seen)

### 🔹 Scenario

Fetch data & inject as props

### 🔹 Real-world use

Legacy React apps (before hooks)

### 🔹 HOC Example

```jsx
const withData = (WrappedComponent) => {
  return function DataComponent(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("/api/users")
        .then(res => res.json())
        .then(setData);
    }, []);

    return <WrappedComponent data={data} {...props} />;
  };
};
```

---

## 8️⃣ Feature Flag Control

### 🔹 Scenario

Enable / disable features dynamically

### 🔹 Real-world use

* A/B testing
* Gradual rollout

### 🔹 HOC Example

```jsx
const withFeatureFlag = (flag) => (WrappedComponent) => {
  return function FeatureComponent(props) {
    const flags = { newUI: true };

    if (!flags[flag]) return null;

    return <WrappedComponent {...props} />;
  };
};
```

---

## 🚨 When NOT to use HOC

❌ For simple state logic → use **custom hooks**
❌ Deeply nested HOCs → hard to debug
❌ When composition is enough

---

## 🧠 HOC vs Hook (Interview Tip)

| HOC             | Hook            |
| --------------- | --------------- |
| Wraps component | Reuses logic    |
| Prop injection  | Cleaner         |
| Older pattern   | Modern standard |

👉 **HOCs are still important** for:

* Auth
* Permissions
* Error boundaries
* Legacy codebases

---

If you want, I can:

* Convert **HOC → custom hook**
* Show **NestJS + React auth HOC**
* Give **interview-ready HOC questions**
* Show **real fintech dashboard HOC architecture**

Just tell me 👍
