import React, { useState, useRef } from "react";
import "./Activity2.css";

export default function Activity2() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  // track renders
  renderCount.current += 1;

  return (
    <div className="container">

      <h1>Counter App</h1>

      <h2>Current Count: {count}</h2>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>
          ➕ Increment
        </button>

        <button onClick={() => setCount(count - 1)}>
          ➖ Decrement
        </button>

        <button onClick={() => setCount(0)}>
          🔄 Reset
        </button>
      </div>

      <p className="info">
        This component rendered: {renderCount.current} times
      </p>

    </div>
  );
}