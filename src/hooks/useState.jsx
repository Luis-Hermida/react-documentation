/* eslint-disable no-unused-vars */
import { React, useState } from "react";

// useEffect
// Returns a stateful value, and a function to update it.

function Counter({ initialCount }) {
  // The returned state (state) is the same as the value passed as the first argument (initialState).
  // The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
  // React may group several state updates into a single re-render to improve performance.
  const [count, setCount] = useState(initialCount);
  const [userName, setUsername] = useState(undefined);
  // Another option for objects is useReducer, which is more suited for managing state objects that contain multiple sub-values.
  return (
    <>
      Count: {count}
      {/* If your update function returns the exact same value as the current state, the subsequent rerender will be skipped completely. */}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}

// Lazy initial state
// The initialState argument is the state used during the initial render. In subsequent renders, it is disregarded. If the initial state is
// the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render

const someExpensiveComputation = (count) => {
  return count + 1;
};

function Counter_({ initialCount }) {
  const [state, setState] = useState(() => {
    const initialState = someExpensiveComputation(initialCount);
    return initialState;
  });
}
