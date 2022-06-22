/* eslint-disable no-unused-vars */
import React from "react";

// Simplest way to define a component is tro write a JavaScript function that accepts  a single
// "props" object argument and returns a React Elements

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Using ES6 Classes
class Welcome_ extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
