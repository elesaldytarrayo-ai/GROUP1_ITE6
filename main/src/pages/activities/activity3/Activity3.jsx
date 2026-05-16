import React, { useState, useEffect } from "react";
import "./Activity3.css";

export default function Activity3() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count === 0) setMessage("✨ Magic is dormant");
    else if (count > 0 && count < 10) setMessage("🌸 Fairy energy rising");
    else setMessage("💫 Maximum enchantment reached");
  }, [count]);

  return (
    <div className="page">

      {/* floating particles */}
      <div className="particles">
        <span>✨</span>
        <span>🌸</span>
        <span>💫</span>
        <span>🦋</span>
      </div>

      <div className="container">

        <div className="header">
          <h1 className="title">FAIRY COUNTER</h1>
          <p className="subtitle">Magic Energy Control System</p>
        </div>

        <div className="display">
          <span className="count">{count}</span>
        </div>

        <p className="message">{message}</p>

        <div className="buttons">
          <button className="btn increase" onClick={() => setCount(count + 1)}>
            ✨ Add Magic
          </button>

          <button className="btn decrease" onClick={() => setCount(count - 1)}>
            🌙 Remove Magic
          </button>
        </div>

        <div className="footer">
          <p>🌸 Activity 3 • Fairy Counter System</p>
        </div>

      </div>
    </div>
  );
}