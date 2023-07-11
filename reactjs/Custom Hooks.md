Custom hooks in React are reusable functions that allow you to extract logic from components and share it across different components. Custom hooks follow specific naming conventions and provide a way to encapsulate stateful logic or side effects.

To create a custom hook in React, follow these guidelines:

1. **Name**: Start the hook name with the word "use" to indicate that it's a custom hook. For example, `useFetchData` or `useLocalStorage`.

2. **Function**: Define a JavaScript function that encapsulates the logic you want to share. This function can use other built-in hooks, such as `useState` or `useEffect`, to manage state or handle side effects.

3. **Usage**: Use the custom hook within your components by invoking it. The custom hook can return values or other functions that can be used in the component.

Here's an example of a custom hook called `useCounter` that manages a counter value:

```jsx
import { useState } from 'react';

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return { count, increment, decrement };
}
```

In the example above, the `useCounter` hook initializes a counter state using `useState` and provides `increment` and `decrement` functions to update the counter value.

You can then use the `useCounter` hook in your components like this:

```jsx
function Counter() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```

By using the `useCounter` hook, you can easily manage a counter state and its related functions across multiple components without duplicating code.

Custom hooks allow you to encapsulate complex logic and share it across different components, promoting code reuse and separation of concerns. They are a powerful feature in React that enhances modularity and maintainability in your applications.