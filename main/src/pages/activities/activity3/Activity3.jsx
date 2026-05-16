import React, { useState, useEffect } from "react";
import "./Activity3.css";

export default function Activity3() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count === 0) {
      setMessage("Counter is at zero");
    } else if (count > 0 && count < 10) {
      setMessage("Keep going!");
    } else {
      setMessage("High Count!");
    }
  }, [count]);

  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <h1 className="title">COUNTER SYSTEM</h1>
          <p className="subtitle">React State Control Panel</p>
        </div>

        <div className="display">
          <span className="count">{count}</span>
        </div>

        <p className="message">{message}</p>

        <div className="buttons">
          <button className="btn increase" onClick={() => setCount(count + 1)}>
            + Increase
          </button>

          <button className="btn decrease" onClick={() => setCount(count - 1)}>
            - Decrease
          </button>
        </div>

        <div className="footer">
          <p>React Activity 3 • Counter System</p>
        </div>
      </div>
    </div>
  );
}