import React, { useState, useRef } from "react";
import "./Activity2.css";

export default function Activity2() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <div className="landing">

      {/* FLOATING ENERGY PARTICLES */}
      <div className="floating-bg">
        <span>⚡</span>
        <span>🔮</span>
        <span>✨</span>
        <span>💠</span>
      </div>

      <div className="container">

        <h1 className="title">NEURAL ENERGY CORE</h1>
        <p className="subtitle">SYSTEM CONTROL INTERFACE</p>

        <div className="counter-display">
          <h2>CORE ENERGY OUTPUT</h2>
          <div className="energy">{count}</div>
        </div>

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>⚡ BOOST</button>
          <button onClick={() => setCount(count - 1)}>⬇ DRAIN</button>
          <button onClick={() => setCount(0)}>🔄 RESET CORE</button>
        </div>

        <div className="card">
          <p>SYSTEM RENDER CYCLE</p>
          <h3>{renderCount.current}</h3>
        </div>

      </div>
    </div>
  );
}