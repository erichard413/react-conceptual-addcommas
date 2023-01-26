### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

    React is a library used to improve javascript apps by breaking DOM elements into components that can be re-used.

- What is Babel?
    
    Babel is a compiler for Javascript which allows us to return HTML language such as <div>, <span>, <p> etc to be used in our DOM.

- What is JSX?

    JSX is similar to Jinja in Flask apps. JSX allows us to use dynamic elements using {} in our HTML files which we can declare & pass in from our Javascript. 

- How is a Component created in React?

    Components are saved in a single .js file as a variable which returns HTML, which is then exported into our file like this: <Component />

- What are some difference between state and props?

    State can be used to store mutable data that is persistant through re-renders. Props are data passed down to a component and cannot be directly changed.

- What does "downward data flow" refer to in React?

    It refers to the fact that you cannot pass data 'up' through a React App. It is best practice to pass data down from the top most component of your app that requires that data, and pass it downward through the app.

- What is a controlled component?

    A controlled component is a component whose forms are controlled by state & props, react has full control of the form data as it constantly sets state using handlers such as onChange.

- What is an uncontrolled component?

    An uncontrolled component is a component where the forms are controlled by the DOM, and state is not being stored onChange.

- What is the purpose of the `key` prop when rendering a list of components?

    The key prop is how react keeps track of elements in the DOM. Keys should be unique.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

    The array index is a poor choice for key prop because if an item is removed from the array, react will still use the 'key' of that removed object, which will lead to react getting confused.

- Describe useEffect.  What use cases is it used for in React components?

    useEffect is a hook that can be used to run change on certain conditions such as one time on page render, or whenever a component changes. It is great for using with localStorage to save any changes to the data.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

    Use ref is a variable that persists through re-renders and a change in the ref does not cause a rerender of the component.

- When would you use a ref? When wouldn't you use one?

    If you have some dynamic data that you would need to store, for example, the deck of cards api will give a deck ID that must be stored to draw from that deck using another API call. UseRef can be used to store this deck ID.

- What is a custom hook in React? When would you want to write one?

    Custom hooks can be written to clean up your logic in your component, as well as to be reused in many other components on your page. instead of re-writing code, we can write a custom hook, and use it within our components.
