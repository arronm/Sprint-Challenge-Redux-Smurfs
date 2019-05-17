- [x] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
 - `actions` are changes to the application, usually by user interaction but can also be a network request
 - `reducers` are pure functions that take the previous state and an action to create the next state
 - `store` is the global application state, it handles our application data
 - The store is known as a single source of truth because any data used across multiple components should be stored in the single location to prevent data syncing issues

- [x] What is the difference between Application state and Component state? When would be a good time to use one over the other?
 - Application state is usually considered global state (as per Redux Store)
 - Component state is data that only that single component (or it's children) should care about
 - If multiple children are accessing the same data for presentation purposes you'll want a SOT for that data in global state
 - In the case of forms, you would usually use component state to store controlled inputs as that isn't required anywhere except in the form component

- [x] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
 - redux-thunk returns a function, it allows us to have async actions with promises to dispatch actions when we receive data from an ajax request essentially delaying the dispatch of an action until the promise is resolved
 - It changes our action creators by letting us call action creators that return a function instead of an action object