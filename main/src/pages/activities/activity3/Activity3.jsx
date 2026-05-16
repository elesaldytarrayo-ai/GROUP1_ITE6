import React, { useState, useEffect } from "react";
import "./Activity3.css";

export default function Activity3() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count === 0) setMessage("SYSTEM: Dormant Energy Core");
    else if (count < 10) setMessage("SYSTEM: Fairy Energy Stabilizing...");
    else setMessage("SYSTEM: Maximum Enchantment Engaged!");
  }, [count]);

  return (
    <div className="page">

      {/* PARTICLES */}
      <div className="particles">
        <span>✨</span>
        <span>🌸</span>
        <span>💫</span>
        <span>🦋</span>
      </div>

      {/* CORE PANEL */}
      <div className="container">

        <h1 className="title">FAIRY NEURAL CORE</h1>
        <p className="subtitle">SYSTEM CONTROL INTERFACE</p>

        <div className="display">
          <div className="count">{count}</div>
        </div>

        <p className="message">{message}</p>

        <div className="buttons">
          <button className="btn increase" onClick={() => setCount(count + 1)}>
            ✨ BOOST ENERGY
          </button>

          <button className="btn decrease" onClick={() => setCount(count - 1)}>
            🌙 DRAIN ENERGY
          </button>
        </div>

        <div className="footer">
          <p>FAIRY SYSTEM ONLINE</p>
        </div>

      </div>
    </div>
  );
}