/* eslint-disable no-unused-vars */
import { React } from "react";

// Rendering multiple components
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => (
  // Keys help React identify which items have changed, are added, or are removed.
  // Most often you would use IDs from your data as keys.
  // You may use the item index as a key as a last resort.

  // !!! Using ID's can negatively impact performance and may cause issues with component state.
  // https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
  <li key={number.toString()}>{number}</li>
));

<ul>{listItems}</ul>;

// Keys must only be unique among siblings
// And they  serve as a hint to React but they don’t get passed to your components.
// If you need the same value in your component, pass it explicitly as a prop with a different name. (id)
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}> {post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id} id={post.id}></div>
  ));
  return <div></div>;
}
