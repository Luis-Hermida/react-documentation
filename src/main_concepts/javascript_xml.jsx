/* eslint-disable no-unused-vars */
import { React } from "react";

const user = {
  avatarUrl: "",
};

// Embedding Expressions
const userName = "Josh Perez";
const element = <h1>Hello, {userName} </h1>;

// JSX is an Expression
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {user}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

// Atrributes with JSX
// With quotes
const element1 = <a href="https://www.reactjs.org"> link </a>;
// Using curly braces to an embeded string
const element2 = <img src={user.avatarUrl} alt={user.avatarUrl}></img>;

// JSX Represents objects
const element3 = <h1 className="greeting">Hello, world!</h1>;
const element4 = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
