/* eslint-disable no-unused-vars */
import { React, useEffect } from "react";

// useEffect
// Accepts a function that contains imperative, possibly effectful code.
// useEffect fires after layout and paint, during a deferred event. This makes it suitable for the many common side effects.

// Mutations, subscriptions, timers, logging, and other side effects are not allowed inside
// the main body of a function component (referred to as React’s render phase).
// Doing so will lead to confusing bugs and inconsistencies in the UI.

// Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen.
// Think of effects as an escape hatch from React’s purely functional world into the imperative world.

// This useEffect will run after every completed render and we are returning a clean-up function
// The clean-up function runs before the component is removed from the UI to prevent memory leaks.
const Component = (props) => {
  useEffect(() => {
    const subscription = props.source.subscribe();
    return () => {
      // Clean up the subscription
      subscription.unsubscribe();
    };
  });
};

// Conditionally firing an effect
// Passing a second argument to useEffect that is the array of values that the effect depends on.
// Now the subscription will only be recreated when props.source changes.
const Component1 = (props) => {
  useEffect(() => {
    const subscription = props.source.subscribe();
    return () => {
      // Clean up the subscription
      subscription.unsubscribe();
    };
  }, [props.source]);
};

// Here we are telling React that our effect doesn't depend on any values
// from props or state so it never has to re-run.
const Component2 = (props) => {
  useEffect(() => {
    console.log("Initial Render");
  }, []);
};
