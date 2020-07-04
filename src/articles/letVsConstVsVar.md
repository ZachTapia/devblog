---
title: "Let, Const & Var"
date: "July 1, 2020"
---

Anyone working with web technologies knows that the field is constantly evolving and changing. With the introduction of ES6, also called ES2015, came two important new JavaScript keywords: `let` and `const`. To fully understand these two additions we first must understand **scope** in the context of JavaScript.

### Scope in Programming

Scope is a concept in all programming languages that defines the accessibility and access of variables, functions, and objects in some particular part of your code at runtime. Put simply, scope determines how "visible" variables are to other resources in different areas of your code. <br/> <br/>
So you may be wondering, why is scope even necessary? Why shouldn't every variable be accessible everywhere in your code? Scope provides us with two benefits: code security and predictability. A common principle in computer security is the **Principle of Least Access**, which states that users should only have access to the resources that they need so they can adequately perform the duties that they are required to. <br/> <br/>
Consider the following example: suppose you are working as a Computer Administrator on a team with three others, as you are all in control over your company's whole computer system, it may seem okay to grant full access user accounts to yourself and your teammates. All is working fine, until one day something bad happens, one of your systems becomes infected with a malicious virus. Since all admins have full access to every part of the system it is impossible to say exactly who's mistake it was. You now realize that you and your teammates should have only had basic user accounts, and only grant full admin access privileges when necessary. This would have helped you track changes to the system and keep a detailed account of when things went bad. <br/> <br/>
The same concept is illustrated in the following analogy: assume that you work as a bank teller. At your bank, you are allowed to replenish your cash drawer from the vault when you are running low. This exposes your bank to an increased risk of theft and errors. By limiting access to secure areas, you reduce the risk of errors. The biggest takeaways from these two examples are that by using the Principle of Least Access you are reducing the possibility of unexpected errors, and increase predictability and accountability.

### Scope in JavaScript

In the JavaScript language, there are two types of scope:

- Global Scope
- Local Scope

Variables defined inside a function are in local scope, while variables defined outside of a function are considered to be in the global scope. Whenever a function is invoked it creates it's own new scope.

### Global Scope in JavaScript

The default behavior in JavaScript is that any variable declared outside of a function is in the global scope. There is only one global scope throughout a whole JavaScript Document. Variables in the global scope are 'visible' to and can be accessed in any other scope.
<br/><br/>

```javascript
// Name variable declared globally
var name = "Zach"

function printName() {
  // Accessible everywhere
  console.log(name)
}

// Prints out Zach
printName()
```

### Let & Const

As mentioned before, with the introduction of ES6, came two new JavaScript keywords: `let` and `const`. These two keywords allow you to define variables and constants that are **block-scoped**. The easiest way to understand this is through example.<br/><br/>
Here we use the older keyword `var` to declare the variable i in the for loop and end up with some odd behavior.
<br/><br/>

```javascript
function count() {
  for (var i = 0; i < 2; i++) {
    // The variable i is accessible inside this for loop
    console.log(i)
  }

  // The variable i is still accessible outside the for loop while inside the function body
  console.log(i)
}
```

<br/> <br/>
We still have access to the variable i outside of the for loop block, while within the function body. This is because when the keyword `var` is used to declare a variable, it defines the variable in a **function scope**. This can cause all types of issues in development such as accidentally overriding other variables in your function, and other unintended side effects. It is now common practice to completely avoid the use of the `var` keyword in development. Instead, you should use the new block-scoped keywords `let` and `const`.<br/><br/>
Here we use the `let` keyword, for a much more controlled and predictable behavior.
<br/><br/>

```javascript
function count() {
  for (let i = 0; i < 2; i++) {
    // The variable i is accessible inside this for loop
    console.log(i)
  }

  // The variable i is not accessible outside the for loop while inside the function body
  console.log(i)
}
```

<br/><br/>

Pieces of code that create blocks:

- Conditional Statements (if, else, else if, switch)
- Loops (for, while, do while)
- Functions

<br/><br/>
In summary, using the older keyword `var` is dangerous because it declares its variables in a wider function scope. This can lead to errors in development. It is best to use the new block-scoped keywords `let` and `const` for their more precise and predictable behaviors.

<br/><br/>
Now that we know the difference between the older keyword `var` and how it differs from `let` and `const`, we now aim to understand the difference between `let` and `const`. While `let` and `const` are closely related, there is one major difference between the two. The keyword `let` is used to define variables that you plan to be able to change the value of later on in your code. The keyword `const` is used to define constants, that you will not be able to change the value of later in your code. Again, consider the example below.
<br/><br/>

```javascript
const permanentNumber = 10
let number = 5

// If we try to change the value of permanentNumber, we get an error.
permanentNumber = 20 // Error

// We can change the value of number after it has been declared.
number = 10 // Perfectly fine
```

<br/><br/>

### Const and Immutability

The final thing I would like to clear up is regarding `const` and immutability. The `const` declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier (name of the variable) cannot be reassigned. For example, in the case that the value of a constant is an object, the object itself can still be altered. This simply means that you can't mutate the value stored in a constant:
<br/><br/>

```javascript
const object = { name: "Rachel" }

object = { name: "Alex" } // Error: invalid re-assignment to const 'object'

object.name = "Alex" // Perfectly fine
```

<br/><br/>
I hope that these explanations helped you understand some of the basics of scope and how it pertains to the keywords `var`, `let`, and `const`.
