In React, event handling is done using the synthetic event system. React provides a consistent and cross-browser compatible way to handle events in components. Event handling in React follows a similar pattern to standard JavaScript event handling but with some syntactical differences.

Here's an example of how React handles event handling:

```jsx
import React from 'react';

const ExampleComponent = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const handleChange = (event) => {
    console.log('Input value:', event.target.value);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default ExampleComponent;
```

In the above example, we have an `ExampleComponent` that renders a button and an input field. The button has an `onClick` event handler, and the input field has an `onChange` event handler.

When the button is clicked, the `handleClick` function is called, and it logs "Button clicked!" to the console. Similarly, when the input value changes, the `handleChange` function is called, and it logs the current value of the input field.

In React, event handlers are specified as props using camel-cased names, such as `onClick`, `onChange`, etc. The event handlers are assigned functions that will be executed when the event occurs.

When an event is triggered, React's synthetic event system handles it and provides a synthetic event object that contains useful information about the event. In the `handleChange` function, the `event` parameter represents the synthetic event object. You can access the event target and its properties, such as `value`, to retrieve the relevant data.

It's important to note that React's event handling is slightly different from traditional DOM event handling, as React uses a single event listener attached to the root of the component tree. This allows React to efficiently manage event delegation and handle events in a performant manner.

By using this pattern, React ensures consistent event handling across different browsers and provides a unified approach to working with events in React components.
