---
title: "React Lifecycle Methods"
date: "July 23, 2020"
---

React allows you to define components in two ways, classes or functions. Previously, if you wanted to maintain state in a component, class based components were the only option. But, with the introduction of React Hooks in React 16.8, accessing and maintaining state in a functional component became possible.
<br /><br />
We will first learn about Class-based components, later we will get into using React Hooks to create stateful functional components.

### React Class Components

To define a React class-based component, you need to extend `React.Component`.
<br /><br />

```javascript
class Header extends React.Component {
  render() {
    return <h1>Let's Learn React</h1>
  }
}
```

<br /><br />
The only required method that this subclass must have is called `render()`. Inside the render method you simply add the JSX you would like the component to render.

### The Component Lifecycle

When talking about a component’s lifecycle there are three major stages a component goes through: mounting, updating, and unmounting. In each one of these stages, there exists “lifecycle methods” which you can override to plug into a component at a particular time in this cycle and run some code.
