# Namaste React 🚀
- Parcel - The Powerhouse Bundler 📦
- React Hooks - Supercharging Components ⚛️
- React Reconciliation - Efficient DOM Manipulation 🔄
- Microservices Architecture - Scalable and Robust 🌐
- Shimmer UI - Enhancing Loading State 🌟
- React-router-dom - Seamless Navigation 🌐
- Single Page Application - Fluid User Experience 🚀
- React Class-based Component - Traditional Yet Powerful 💻
- Custom Hooks - Reusable and Efficient 🔄
- Code Splitting and Lazy Loading - Optimal Performance 🚀
- CSS Libraries and Frameworks - Tailored Styling Options 🎨
- Higher Order Component - Enhancing UI Flexibility 🔄
- Redux Toolkit - State Management Excellence 🔄
- React Testing Library and Jest - Ensuring Reliability ✅
- Context API - Global State Management 🌐

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Minification
- Image Optimization
- Bundling
- Compression
- Consistent Hashing
- Code Splitting
- Differential bundling - supports older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and production bundles

# Two types of export/import

- Named export

export const Component;
import {Component} from "path";

- Default export

export default Component;
import {Component} from "path";

# React Hooks - Normal JS utility Functions

- They usually starts with the 'use'
- Developed by Facebook Developers
- Found inside react i.e., in the node modules folder
- predefined functions
- Two popular React Hooks - both are imported as named import
- Always use React Hooks inside the Component

  - useState() - It provides the super powerful variables
    state variables maintains the state of the component
    state variables have their scope inside the component (also declared inside)
    It returns array which contain variable and funtion to update the state variable.
    whenever the state variable updates/changes , react rerenders the components.
    React keeps track of its state variable
    The state change function is provided to trigger the diff algorithm
    The state variable can only be updated using the setVariable function
    Whenever state variable updated the whole component renders again
    Never declare the state variable inside if/else
    Always define state variable at the top inside the component

  - useEffect() - It takes two argument - callback function and the dependency array
    Whenever component inside dependency array renders ,callback function is invoked
    - If there is no dependency array - useEffect() is called on every render
    - If there is empty dependency [] - useEffect() is called on only initial render
    - If there is variable inside dependency [] - useEffect() is called every time the variable updates
    - If there is setInterval inside the useEffect hook then we have to return a function with the clearInterval(timer)

# React Reconciliation - Algorithm to diff one tree with another

- Efficient DOM Manipulation
- It run the Diff algorithm and manipulates the DOM
- Diff algo find the difference in two virtual DOMs and the updates the actual DOM
- Virtual DOM is just the object representation of the Components/Elements.

# Monolith Architecture

- In this all the services are written in a single project
- They all have a single deployment cycle
- They all have to be written in a Single language

# Microservices Architecture

- In this the services have their separate project
- It is based on "Separation of Concern" and Single principle
- They all have their separate deployment Cycle
- Different Services can be written in different languages
- They communicate with each other using different ports
- Each services are deployed on different ports but have same domain name
- Diff services - BS, Auth, DB, UI , SMS , Email

# Approach to render the component

- General - The pages get freezed for sometime while making api call
  LOADING -> API CALL -> RENDER
  (Takes time)

- REACT approach - The pages gets the basic structure during API call
  LOADING -> RENDER -> API CALL ->RERENDER
  (basic Structure)

  It uses the useEffect hook, API calls are written inside the callback function

# SHIMMER UI - Better way to Show loading state in application

# Conditional Rendering

- Rendering a component on a condition

# React-router-dom - Package to implement routing in React Application

- useParams() - This hook returns an object of key/value pairs of the dynamic params from the current URL

# Routing - feature that helps to navigate between different pages in React app.

- install react-router-dom
- import {createBrowserRouter, RouterProvider}
- create router configuration using createBrowserRouter
- configuration includes array of object with properties - path,element,errorElement
- Render RouterProvider with the router configuration
- It also provides useRouteError hook

# Outlet

- An <Outlet> used in parent route elements to render their child route elements
- Children are defined in router configuration

# Link

- It is a element provided by react-router-dom
- It helps to navigate to other pages without reloading the whole page
- It just refreshes the components
- Behind the scenes it uses the <a> tag

# Single Page Application

- In this we navigate among different pages without reloading the whole page
- It uses the client side routing

# Types of routing

- Client Side Routing : It loads all the components when the app is loading
  When a user clicks a link, it just refreshes the components
  It does not refreshes the whole page and prevent N/w call to server

- Server side Routing : It only loads a single page and when the app is loaded
  When a user clicks a link, it does a N/w call to server for the other page
  It reloads the page when the URL changes

# React Class based Component

- It is usually a Class that extends React.Component
- React.Component is a class that is given by react
- It contains the render method that returns the JSX
- It recieves the props using the constructor
- It passes props to super method so that it can access the props outside constructor
- Props can be accessed through this.props.name
- State variables are declared inside the constructor using this.state
- this.state accepts a object that contains the state variable just like properties
- State variables are updated by this.setState(object of variable i.e,. to be update)

# ComponentDidMount

- It is invoked immediately after a component is mounted (inserted into the tree).
- All the API calls are done inside the ComponentDidMount.

# Lifecycle when one child component are rendered in Class based Component

Parent Constructor called
Parent Component Render
First ChildConstructor
First ChildRender called
First ChildComponentdidMount
Parent Component ComponentdidMount

# Lifecycle when two child component are rendered in Class based Component

- Here the React optimize the DOM manipulation
- Here the React patches the render phase of the childrens
- React patches the commit phase of the children into a single update

  Parent Constructor called
  Parent Component Render
  First ChildConstructor
  First ChildRender called
  Second ChildConstructor
  Second ChildRender called
  First ChildComponentdidMount
  Second ChildComponentdidMount
  Parent Component ComponentdidMount

# Lifecycle of Mounting - Two phases

- Render phase

  - Constructor
  - Render

- Commit phase
  - DOM manipulation
  - ComponenentDidMount

# Whole lifecycle

/\*

----Mounting---------

constructor called
Render called

<HTML (dummy data)>
ComponentDidMount - Api call - setState()

----Update--------

Rerender (updated data)
Reconciliation

<HTML (new data)>
ComponentDidUpdate

\*/

# Custom Hooks

- Hooks are reusable functions.
- When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
- Custom Hooks start with "use".
- while creating onlineStatus hook , use window.addEventListener()

# Bundling

- Most React apps will have their files “bundled” using tools like Webpack, Rollup
- Bundling is the process of following imported files and merging them into a single file: a “bundle”.
- This bundle can then be included on a webpage to load an entire app at once.

# Chunking / Code Splitting / Dynamic Bundling / Lazy loading / on Demand Loading/ Dynamic Import

- Bundling is great, but as your app grows, your bundle will grow too.
- Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.
- Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app.

# CSS libraries and Frameworks

- Material UI
- Chakra Ui
- Bootstrap
- Styled-component
- Sass/scss
- Tailwind
- Ant Design

# Higher Order Component -

- They are usually the functions that takes Component as argument and return the enhanced Component
- They are called Pure functions because they do not change the behavior of the component , they just add some props or enhance its UI .

# React component have two layers - UI layer and Data layer

- UI layers consist of the JSX
- Data layer consist of the state, props, variables.

# Controlled and Uncontrolled Components

- Components which are controlled by their parent component are Controlled Component
- Usually the state or the features are passed by the parent component

# Lifting the state Up

- In this rather than maintaining the individual state in each child component , we
  lift the state up i.e., we maintain the state in the parent component and pass the features to the child component
  - We usually use this in making the accordian

# Context

- It is like a global store
- Context provides a way to pass data through the component tree without having to pass props down manually at every level.
- We use createContext to create context and useContext to use it
- We can also use Context.Consumer to use in Class based component
- Render the JSX containing the callback() to access the data inside the Consumer tag

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to the app
- Create a slice in the store
- Dispatch (action)
- Read the slice using Selector

# Types of Testing

- Unit Testing - Testing the React component in an isolation
- Integration Testing - write the test cases for the components that are communicating with each other to make a flow of the app
- E2E Testing (End to End) - Testing the flow from from landing of user on the website until the user leaves the website

# React Testing Library

- React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.
- Projects created with Create React App have out of the box support for React Testing Library.
- It uses JEST behind the scene

# JEST

- Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- It works with projects using: Babel, TypeScript, Node, React, Angular, Vue etc.

# Setting Up Testing in our app

- Install Testing library
- Install JEST
- Install babel dependencies
- configure babel
- Configure parcel config to disable default babel transpilation
- Jest config - npx jest --init
- Install jsdom
- Install @babel/preset-react - to run JSX in test cases
- Include @babel/preset-react inside babel.config.js
- Install @testing-library/jest-dom

# Test cases

- Always write the test cases file inside the "**tests**" folder
- Make the file name as
  - Sum.test.js or Sum.test.ts
  - Sum.spec.js or Sum.spec.ts
- ** is known as dunder and **test\_\_ is known as dunder test
- Jest uses this to track the distinct files
- We can group similar test cases inside describe()
- It is alias for the test, both are same
- Test cases involves - Rendering , Querying and Assertion.
- Add this in package.json to keep running the test cases
- "watch-test" :"jest --watch"
- Whenever there is a state update and fetch() you have to wrap the component inside act()
- Create fetch() using jest.fs()
- If there is Link inside the component , wrap component inside BrowserRouter

