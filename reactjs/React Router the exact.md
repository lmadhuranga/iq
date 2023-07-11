In React Router, the `exact` prop is used to specify that a route should only be matched if the URL path is an exact match to the defined route path. Without the `exact` prop, React Router matches routes partially based on the URL path.

Consider the following example:

```jsx
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}
```

In this example, we have three routes defined: `/`, `/about`, and `/contact`.

- Without `exact`:
  - When visiting `/`, the `Home` component will be rendered because it matches the root path `/`.
  - When visiting `/about`, both the `Home` and `About` components will be rendered since `/about` also partially matches the root path `/`. This is because React Router matches based on partial matches by default.

- With `exact`:
  - When visiting `/`, only the `Home` component will be rendered because the `exact` prop is used on the root route. It ensures that the root path is matched exactly and doesn't partially match other routes.
  - When visiting `/about`, only the `About` component will be rendered because `/about` doesn't exactly match the root path.

Using the `exact` prop is useful when you want to ensure that a route is matched only if the URL path is an exact match. It's commonly used for the root path to avoid partial matches with other routes.

Note that the `exact` prop should be used on the most specific routes or routes that you want to be matched exactly. In the example above, it is used on the root path because it should only match the root URL and not partial matches like `/about` or `/contact`.

By using the `exact` prop in React Router, you can have fine-grained control over how routes are matched and rendered based on the URL path.