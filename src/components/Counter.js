import React, { useState } from "react";

/**
 * @description
 * Example of a simple React "smart component" component.
 * Initial state is a number received thorough the props in the "startWith" property.
 * Increment button increments the current state value by 1.
 * Decrement button decrements the current state value by 1
 * The current state value is presented between the buttons
 */
export function Counter(props) {
  const [counter, setCounter] = useState(props.startWith);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return (
    <div
      style={{
        display: "flex",
        marginTop: "50px",
        justifyContent: "center"
      }}
    >
      <button onClick={increment}>+</button>
      <div className="result">{counter}</div>

      <button onClick={decrement}>-</button>
    </div>
  );
}
