import React, { useState, useRef } from "react";
import "./Activity2.css";

export default function Activity2() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <div className="landing">

      <div className="floating-bg">
        <span>✨</span>
        <span>🌸</span>
        <span>💫</span>
        <span>🦋</span>
      </div>

      <div className="container">

        <h1 className="title">✨ Magic Counter</h1>
        <h2 className="subtitle">Fairy Energy Level: {count}</h2>

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>➕ Add Magic</button>
          <button onClick={() => setCount(count - 1)}>➖ Remove Magic</button>
          <button onClick={() => setCount(0)}>🔄 Reset Spell</button>
        </div>

        <div className="card">
          <p>🌟 This spell has been cast:</p>
          <h3>{renderCount.current} times</h3>
        </div>

      </div>
    </div>
  );
}