# Hackerchat

This README covers the following lectures:
* [Forms Lecture](#forms-lecture)
* [Components and Props Lecture](#components-and-props-lecture)
* [State and Events Lecture](#state-and-events-lecture)

# Forms Lecture

* Reference: [Docs](https://reactjs.org/docs/forms.html)

## Key Questions
* How do forms work in React?
* What is an uncontrolled form input? What is a controlled form input?
  * Which kind should I use, and why?
* What kind of event listeners should I use with my form?
* What kind of event listeners should I use with my form inputs?
* How can I share one event listener between all my form inputs?
  * What are computed properties again?
* What should I do when the form gets submitted?
  * What if my state for the thing I just created / updated is in a different component?

## Bonus:
* Let's figure out our message state!!!!

# Components and Props Lecture

![Ott wireframe](wireframe-mock.png)

## What to expect when you're Reacting
* Projects
* The Job Search
* What we'll be covering

## Key Questions
* What is `create-react-app` and why is it cool?
* How can I create a React app that renders "Hello, World!" to the screen?
* What is a component in the context of React?
* What do the docs say about React
* What is a component made of in JavaScript?
* What's the difference between imperative and declarative programming?
    https://youtu.be/cDA3_5982h8?t=42
* What is JSX and why would I want it in my app?
* What is the virtual DOM and why is it cool?
* What is the difference between the virtual DOM and the actual DOM?
* How can I describe the component hierarchy using the terms root, parent, and child?
* How can I create a React app that renders a container, one list, and five list items?
* How can I define the term prop in the context of React?
* How can I list the types of data that can be passed as props
* How can I identify components from a wireframe and draw out the flow of information?

# State and Events Lecture

## Key Questions
* What is state and why is it cool?
* How do I set up state in a component for the first time?
  * Can I has state in a functional component?
* How do I change state as things happen in my app?
* Why should most-if-not-all event handlers in a React app be `() =>` arrow functions?
* What gets passed into an event handler when the event occurs and the handler runs?
* What will happen to my component when state changes?
* Why do I need `this.setState` and why is it a bad idea to bypass it?
* What was the "old way" of setting up state that I might see in legacy code?
  * What is a constructor again?
  * What is `super` again?
  * WHY GOD WHY ARE WE USING BIND AGAIN

BREAK

* How can I debug state changes in way that won't be super frustrating?
* What if I need a child component to know about its parent's state?
* Where can I put my state? Where _should_ I put my state?
* What are the differences between state and props?
  * Is there any difference between what will happen if state changes vs. if props change?
  * Can state become props?
  * Can props become state?

* Rules for state
  * Never mutate state directly. Don't call `this.state =`, don't call `this.state.messages.push`, and don't call `this.state.messages.sort`
