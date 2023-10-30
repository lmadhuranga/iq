In React, you can also create error boundaries using React hooks, specifically the `useEffect` hook. While the `useEffect` hook is primarily used for side effects and lifecycle operations, you can leverage it to catch and handle errors in a functional component. Here's how you can create an error boundary in a functional component using hooks:

```javascript
import React, { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleErrors = (error, errorInfo) => {
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      setHasError(true);
    };

    // Listen for errors during the render phase
    window.addEventListener('error', handleErrors);

    return () => {
      // Clean up event listener
      window.removeEventListener('error', handleErrors);
    };
  }, []); // Empty dependency array ensures this effect runs once

  if (hasError) {
    // Display a fallback UI when an error occurs.
    return <div>Error: Something went wrong!</div>;
  }

  return children;
}

export default ErrorBoundary;
```

In this functional component:

1. We use the `useState` hook to manage the `hasError` state, which tracks whether an error has occurred.

2. We use the `useEffect` hook to set up an event listener for global errors that occur during the render phase.

3. The `handleErrors` function logs the error and error information and sets `hasError` to `true` when an error is detected.

4. In the event listener, we use `window.addEventListener('error', handleErrors)` to listen for global errors. This way, we can capture errors occurring anywhere within the component tree.

5. We clean up the event listener in the `useEffect` cleanup function to prevent memory leaks.

6. If an error occurs, the component renders an error message. If no error occurs, it renders its children.

To use this error boundary in your components, you wrap the part of your component tree where you want to catch errors with the `ErrorBoundary` component, just like in the class-based example:

```javascript
function App() {
  return (
    <div>
      <h1>My React App</h1>
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    </div>
  );
}

function ChildComponent() {
  // Simulate an error
  throw new Error('This is a simulated error.');
  return <div>This component should never render.</div>;
}
```

When an error occurs in the `ChildComponent`, the `ErrorBoundary` will catch it, and the UI will display the error message, preventing a crash of the entire application.

This functional approach provides similar error boundary functionality as the class-based example but is implemented using React hooks.
