In React, a Higher-Order Component (HOC) is a function that takes a component and returns a new enhanced component. HOCs are used to reuse component logic, add additional functionality, or modify the behavior of components. They enable code reuse and composition in React applications.

Here's an example to illustrate how to create and use a Higher-Order Component:

```jsx
// Higher-Order Component
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log('Component Rendered:', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
};

// Component
const MyComponent = (props) => {
  return <div>{props.message}</div>;
};

// Wrap the component with the Higher-Order Component
const EnhancedComponent = withLogger(MyComponent);

// Usage of the EnhancedComponent
const App = () => {
  return <EnhancedComponent message="Hello, World!" />;
};
```

In this example, we define a Higher-Order Component called `withLogger`. It takes a component (`WrappedComponent`) as an argument and returns a new component. The new component logs the name of the wrapped component (`MyComponent`) before rendering it.

To use the HOC, we wrap the target component (`MyComponent`) with the `withLogger` function, resulting in the creation of a new component (`EnhancedComponent`). The `EnhancedComponent` contains the enhanced behavior provided by the HOC.

In the `App` component, we use the `EnhancedComponent` by passing it the necessary props. The HOC logs the name of the wrapped component (`MyComponent`) before rendering it.

HOCs can be used for various purposes, such as:
- Adding authentication or authorization logic to components.
- Implementing reusable behaviors, like data fetching or error handling.
- Injecting additional props or state into components.
- Modifying component rendering based on certain conditions.

By creating reusable HOCs, you can separate concerns, promote code reuse, and enhance the flexibility of your React components. They provide a powerful mechanism for enhancing and extending components without modifying their original implementation.