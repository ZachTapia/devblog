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

#### constructor()

The first thing that gets called is your component constructor. The constructor method is always called with the component props as the argument. The first thing you should always do in your constructor is call `super(props)` . Basically, this makes sure that `this.props` is not undefined in the constructor. The most common use cases for overriding the constructor method is to:

- Initialize local component level state by assigning an object to `this.state` .
- Calling `createRef()` , which gives a component a reference to a different element in the DOM.
- Binding event handler methods to an instance of a class.

```javascript
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Welcome",
    }
  }
}
```

<br /><br />

You should not call `setState()` in the constructor method. Instead, if you wish to use local component level state, assign the initial state to this.state directly in the constructor. This is the only time it is acceptable to directly assign state, any other time requires the use of `setState()`.

#### static getDerivedStateFromProps()

This lifecycle method gets called right before the `render()` method. It is invoked on the components initial mounting and every update the component undergoes thereafter. Here's a quick example of creating any number of posts based on a components props:
<br /><br />

```javascript
class PostList extends React.Component {
  static getDerivedStateFromProps(props, state) {
    return { posts: createPosts(props.numberOfPosts) }
  }
}
```

<br /><br />
This method’s name describes exactly what it is used for. This method is used when the state of the component depends on changes in props over time. What’s a static method? A static method is a method / function that exists on the class not its instance. The easiest difference to think about is that static method does not have access to this and has the keyword static in front of it.
<br /><br />
Ok, but if the function has no access to this how are we to call `this.setState()` ? The answer is  -  we don’t. Instead the function should return the updated state data, or null if no update is needed `getDerivedStateFromProps()` is seldom used, and should be used sparingly in development.

#### render()

This lifecycle method is the most common, and the only one required in class-based components. This method is responsible for the output of the component. Typically, the `render()` function returns JSX to be rendered, but could also return an array of multiple elements. The `render()` function should be pure, which means a few things:

- `render()` should return the same result each time it is invoked, given that the same arguments are used.
- `render()` should not be used to modify component state.

Removing as much logic as possible from `render()`, and maintaining the two guidelines listed above helps keep `render()` pure, more predictable, and easier to reason about. An easy example would be:
<br /><br />

```javascript
class Header extends React.Component {
  render() {
    return <h1>Let's learn React</h1>
  }
}
```

#### componentDidMount()

This method is invoked immediately after a component is mounted successfully. One good reason to override `componentDidMount()` is to load a remote endpoint, this is the default location to instantiate a network request. Don't set up external network requests in the `constructor()` , the reason being is that you cannot guarantee that your network request will resolve after your component mounts. Meaning that if your network requests beats your component to mounting, then you will be trying to call `setState()` on an unmounted component with the data you received from your network request, which will not work. Using `componentDidMount()` means that you guarantee there is a component ready and waiting.

<br /><br />

```javascript
class PostList extends React.Component {
  componentDidMount() {
    // Make network request
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(console.log)
  }
}
```

<br /><br />

After this method is run, and completed, the component is considered to be mounted, and will continue on in the component lifecycle into the next stage, updating.

### Updating

After a component has successfully mounted, it is considered to be in the updating stage. This is where a component will spend most of its life. Here it will wait and listen for a few things: change in its props, change in its state, or the call of `forceUpdate()` . If any of these three things happen, then the following lifecycle methods are called in the following order:

- `static getDerivedStateFromProps()`
- `shouldComponentUpdate()`
- `render()`
- `getSnapshotBeforeUpdate()`
- `componentDidUpdate()`

#### shouldComponentUpdate()

This lifecycle method is used to let React know if this component’s output is not affected by the current change in state or props. This basically tells React to ignore re-rendering this component. The only use of this method is for performance optimization. The default behavior of React is to re-render any component when it’s props or state changes, this will override that default behavior and prevent a re-render. In the example below, we override `shouldComponentUpdate()` to only allow the component to re-render when the dollar amount is multiple of 10.
<br /><br />

```javascript
class Dollars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dollar: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

 handleChange(e) {
   this.setState({dollar: (e.target.value) | 0});
 }

 shouldComponentUpdate(props, state) {
   return state.dollar % 10 == 0;
 }

 render() {
   ...
 }
```

#### getSnapshotBeforeUpdate()

This method is invoked right before the rendered output of a component is sent to the DOM. It exists as a last-chance-look at your component with its previous props and state. It enables the component to capture and persist some information from the DOM before it is changed. Any value returned by this method will be passed to `componentDidUpdate()` . The most common use for this method is to get a user's scroll height, and persist that data so that when a component re-renders the user remains at the same location.

#### componentDidUpdate()

`componentDidUpdate()` is called immediately after a component is successfully updated, but is not called on the initial render, i.e. mounting phase. A common use case is to make network requests if something about the component has changed. When using this method make sure to compare the current new props, to the previous props, as to not make extra unnecessary network requests when nothing has changed.
<br /><br />

```javascript
class UserProfile extends React.Component {
  componentDidUpdate() {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

### Unmounting

When the time has come, React components may be unmounted, or removed from the DOM. But before a component is removed forever, a lifecycle method has the opportunity to be called.

#### componentWillUnmount()

`componentWillUnmount()` is invoked right before a component is unmounted from the DOM and destroyed. Use this opportunity to perform any necessary cleanup required before saying goodbye forever, such as, cancelling any open network connections. You should not call `setState()` inside this method because the component will never be re-rendered.

<br /><br />
That's all I have for this topic! Thanks for reading! Please understand that lifecycle methods are quiet hard to reason about and get used to. They add complexity to your application. Don't use them unless you absolutely must!
