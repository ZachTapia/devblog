---
title: "React Lifecycle Methods"
date: "July 23, 2020"
---

React allows you to define components in two ways, classes or functions. Previously, if you wanted to maintain state in a component, class based components were the only option. But, with the introduction of React Hooks in React 16.8, accessing and maintaining state in a functional component became possible.
<br /><br />
In this article, I will only be covering class-based components, in a separate article we will get into using React Hooks to create stateful functional components.

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

### Mounting

These lifecycle methods are called in the following order when an instance of a component is being created and inserted into the DOM:

- `constructor()`
- `static getDerivedStateFromProps()`
- `render()`
- `componentDidMount()`

### constructor()

The first thing that gets called is your component constructor. The constructor method is always called with the component props as the argument. The first thing you should always do in your constructor is call `super(props)` . Basically, this makes sure that `this.props` is not undefined in the constructor. The most common use cases for overriding the constructor method is to:

- Initialize local component level state by assigning an object to `this.state` .
- Calling `createRef()` , which gives a component a reference to a different element in the DOM.
- Binding event handler methods to an instance of a class.

You should not call `setState()` in the constructor method. Instead, if you wish to use local component level state, assign the initial state to this.state directly in the constructor. This is the only time it is acceptable to directly assign state, any other time requires the use of `setState()`.

### static getDerivedStateFromProps()

This lifecycle method gets called right before the `render()` method. It is invoked on the components initial mounting and every update the component undergoes thereafter.

This method’s name describes exactly what it is used for. This method is used when the state of the component depends on changes in props over time. Keep in mind that this function is static, which means it does not have access to `this` .

### render()

This lifecycle method is the most common, and the only one required in class-based components. This method is responsible for the output of the component. Typically, the `render()` function returns JSX to be rendered, but could also return an array of multiple elements. The `render()` function should be pure, which means a few things:

- `render()` should return the same result each time it is invoked, given that the same arguments are used.
- `render()` should not be used to modify component state.

Removing as much logic as possible from `render()`, and maintaining the two guidelines listed above helps keep `render()` pure, more predictable, and easier to reason about.

### componentDidMount()

This method is invoked immediately after a component is mounted successfully. One good reason to override `componentDidMount()` is to load a remote endpoint, this is the default location to instantiate a network request. After this method is run, and completed, the component is considered to be mounted, and will continue on in the component lifecycle into the next stage, updating.

### Updating

After a component has successfully mounted, it is considered to be in the updating stage. This is where a component will spend most of its life. Here it will wait and listen for a few things: change in its props, change in its state, or the call of `forceUpdate()` . If any of these three things happen, then the following lifecycle methods are called in the following order:

- `static getDerivedStateFromProps()`
- `shouldComponentUpdate()`
- `render()`
- `getSnapshotBeforeUpdate()`
- `componentDidUpdate()`

### shouldComponentUpdate()

This lifecycle method is used to let React know if this component’s output is not affected by the current change in state or props. This basically tells React to ignore re-rendering this component. The only use of this method is for performance optimization. The default behavior of React is to re-render any component when it’s props or state changes, this will override that default behavior and prevent a re-render.

### getSnapshotBeforeUpdate()

This method is invoked right before the rendered output of a component is sent to the DOM. It enables the component to capture and persist some information from the DOM before it is changed. Any value returned by this method will be passed to `componentDidUpdate()` .

### componentDidUpdate()

`componentDidUpdate()` is called immediately after a component is successfully updated, but is not called on the initial render, i.e. mounting phase. A common use case is to make network requests if something about the component has changed. When using this method make sure to compare the current new props, to the previous props, as to not make extra unnecessary network requests when nothing has changed.

### Unmounting

When the time has come, React components may be unmounted, or removed from the DOM. But before a component is removed forever, a lifecycle method has the opportunity to be called.

### componentWillUnmount()

`componentWillUnmount()` is invoked right before a component is unmounted from the DOM and destroyed. Use this opportunity to perform any necessary cleanup required before saying goodbye forever, such as, cancelling any open network connections. You should not call `setState()` inside this method because the component will never be re-rendered.
