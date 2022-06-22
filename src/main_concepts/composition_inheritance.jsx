/* eslint-disable no-unused-vars */
import { React } from "react";

// Containment
// Some components don’t know their children ahead of time.
// We recommend that such components use the special children prop to pass children elements directly into their output:
function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}{" "}
    </div>
  );
}

// Passing down multiple children
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left} </div>
      <div className="SplitPane-right">{props.right} </div>
    </div>
  );
}

function App() {
  return <SplitPane left={<h1> Left </h1>} right={<h1> Right </h1>} />;
}

// Inheritance
// Props and composition give you all the flexibility you need to customize a component’s look
// and behavior in an explicit and safe way. Remember that components may accept arbitrary props,
// including primitive values, React elements, or functions.

// If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module.
// The components may import it and use that function, object, or a class, without extending it.
