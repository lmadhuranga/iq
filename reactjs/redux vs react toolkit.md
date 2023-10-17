
# Redux vs Redux Toolkit: Choosing the Right State Management Solution 
  
June 28, 2023

Managing state in complex JavaScript applications can be challenging. Thankfully, Redux has emerged as a popular state management library, providing a predictable way to handle state changes. However, Redux itself can be verbose and requires writing a lot of boilerplate code. This is where Redux Toolkit comes in. In this article, we will explore the differences between Redux and Redux Toolkit and discuss when to use each solution.

  

### Understanding Redux

Redux is a predictable state container for JavaScript apps. It follows the Flux architecture and provides a centralized store to manage application state. Redux uses actions and reducers to handle state changes. Actions are plain JavaScript objects that describe the type of change, while reducers specify how the state should be updated based on those actions.

  

**Example 1: Counter using Redux**

Let's take a look at a simple Redux counter implementation:

// Action Type
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Actions
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Store
const { createStore } = Redux;
const store = createStore(counterReducer);

// Dispatching Actions
store.dispatch(increment());
console.log(store.getState()); // Output: 1

store.dispatch(decrement());
console.log(store.getState()); // Output: 0s

  

**Example 2: Todo List using Redux**

Let's consider a Todo List implementation using Redux:

// Action Type
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// Actions
const addTodo = (text) => ({ type: ADD_TODO, payload: text });
const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });

// Reducer
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

// Store
const { createStore } = Redux;
const store = createStore(todoReducer);

// Dispatching Actions
store.dispatch(addTodo('Buy groceries'));
store.dispatch(addTodo('Clean the house'));
store.dispatch(toggleTodo(1));
console.log(store.getState()); // Output: [{ id: 1, text: 'Buy groceries', completed: true }, { id: 2, text: 'Clean the house', completed: false }]s

  

### Introducing Redux Toolkit

While Redux is powerful, it requires writing a lot of boilerplate code to set up the store, define actions, and write reducers. Redux Toolkit is an opinionated, batteries-included package that simplifies the Redux workflow. It provides utilities that streamline common Redux tasks, such as creating actions and reducers.

  

**Example 1: Counter using Redux Toolkit**

Now, let's rewrite the previous counter example using Redux Toolkit:

import { createSlice, configureStore } from '@reduxjs/toolkit'

// Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

// Store
const store = configureStore({ reducer: counterSlice.reducer });

// Dispatching Actions
store.dispatch(counterSlice.actions.increment());
console.log(store.getState()); // Output: 1

store.dispatch(counterSlice.actions.decrement());
console.log(store.getState()); // Output: 0;

  

**Example 2: Todo List using Redux Toolkit**

Let's consider a Todo List implementation using Redux Toolkit:

import { createSlice, configureStore } from '@reduxjs/toolkit'

// Slice
const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { id, text } = action.payload;
      state.push({ id, text, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

// Store
const store = configureStore({ reducer: todoSlice.reducer });

// Dispatching Actions
store.dispatch(todoSlice.actions.addTodo({ id: 1, text: 'Buy groceries' }));
store.dispatch(todoSlice.actions.addTodo({ id: 2, text: 'Clean the house' }));
store.dispatch(todoSlice.actions.toggleTodo(1));
console.log(store.getState()); // Output: [{ id: 1, text: 'Buy groceries', completed: true }, { id: 2, text: 'Clean the house', completed: false }];

----------

### Advantages of Redux Toolkit

Redux Toolkit offers several advantages over plain Redux:

-   Reduced Boilerplate: Redux Toolkit's createSlice function automatically generates action types and action creators, reducing the amount of code you need to write.
-   Immutability Handling: Redux Toolkit uses the Immer library under the hood, making it easier to write immutable updates to the state.
-   DevTools Integration: Redux Toolkit seamlessly integrates with the Redux DevTools Extension, providing a better debugging experience.

### When to Use Redux

While Redux Toolkit simplifies the Redux development process, there are still cases where using plain Redux might be preferable:

-   Advanced Use Cases: If you have complex state management needs, such as middleware, custom enhancers, or manual control over store creation, plain Redux gives you more flexibility.
-   Existing Redux Codebase: If you're already using Redux in your project and have an established codebase, migrating to Redux Toolkit might require more effort and may not be necessary unless you encounter specific pain points.

  

### Conclusion

Redux Toolkit provides a simplified and opinionated approach to state management compared to plain Redux. It reduces boilerplate code and offers additional features such as immutability handling and DevTools integration. However, if you have advanced state management requirements or an existing Redux codebase, plain Redux may still be a suitable choice. Consider your project's needs and complexity when deciding between Redux and Redux Toolkit, ensuring that you choose the right state management solution for your application.
