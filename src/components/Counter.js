import React, { useState } from "react";

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
