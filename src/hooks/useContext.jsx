/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

// useContext
// Accepts a context object (the value returned from React.createContext) and returns the current context value for that context.
// The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

// When the nearest <MyContext.Provider> above the component updates,
// this Hook will trigger a rerender with the latest context value passed to that MyContext provider.
// Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.

// A component calling useContext will always re-render when the context value changes.
//  If re-rendering the component is expensive, you can optimize it by using memoization.

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes);

export default function ContextComponent() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
