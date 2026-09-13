=> Name of your project: Dev Stack
=> This is an intereactive webpage where anyone can add technologies in the Your Stack section and also remove them from there.
=> Technologies I used: React, TypeScript, Tailwind Css, Daisy Ui, React icons, React Toastify, etc.
=> 3 features of this project : 1. You can Add any technology to Your Stach section by clicking Add to Stack button.
                                2. You can remove any technology to Your Stach section by clicking Cross button.
                                3. You can remove all Stack that you choosen by one click using Remove All button.

=> Some Question and Answear: 
  1. What is JSX, and why is it used in React?
  - JSX is what we write on a component. It helps us to write html on JavaScript
  2. What is the difference between props and state?
  - Props are the parameters what we recive or send to a function. and State is a hook of React that gives us a value and a function to update the value. Its mostly help us to rerender the UI.
  3. What does the useState hook do, and where did you use it in this project?
  - useState hook gives us a variable and a setter function to update the value of the variable. I used it on the functionality of buttons.
  4. What does the useEffect hook do, and why did you need it to load the JSON data?
  - useEffect hook helps us to load the JSON data without making a promise.
  5. Why does every item in a .map() list need a unique key prop?
  - 
  6. What is conditional rendering? Show one place you used it (example: the empty stack message).
  - conditional rendering means rendering the UI using a condition. As example I used it on the Your State section. When no stack is choosen the UI shows a div with a message. and when we choose any stack the UI shows the stack info on Your Stack section.
  7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
  - We can pass data from a parent component to a child component as props. In reack unidirectional data passing is not allowed. 
