/* eslint-disable no-unused-vars */
import React from "react";

const activateLasers = () => null;

// Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

// React events are named using camelCase, rather than lowercase.
// With JSX you pass a function as the event handler, rather than a string.

// Example event on HTML to React:
<button onclick="activateLasers()">Activate Lasers</button>;

const element = <button onClick={activateLasers}> Activate Lasers</button>;

// Prevent default behavior on HTML to React:
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>;

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

// It's common for a ES6 Class component to set the event handler action as a method of the class.
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback.
    // You can use 'public class fields syntax' or an 'arrow function' to avoid binding.
    // !!! It can cause re-renders if the function is passed to children components.
    // !!! Binding is recommended.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ isToggleOn: !prevState.isToggleOn }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

// Passing arguments to event handlers
const id = 1;
const button = (
  <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
);

const button_ = (
  <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
);
