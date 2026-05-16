import React, { useState } from "react";
import "./Mco2.css";

import Activity1 from "../activities/activity1/Activity1";
import Activity2 from "../activities/activity2/Activity2";
import Activity3 from "../activities/activity3/Activity3";
import Activity4 from "../activities/activity4/Activity4";
import Activity5 from "../activities/activity5/Activity5";

export default function Mco2() {
  const [page, setPage] = useState("home");
  const [open, setOpen] = useState(false);

  const renderPage = () => {
    switch (page) {
      case "activity1":
        return <Activity1 />;
      case "activity2":
        return <Activity2 />;
      case "activity3":
        return <Activity3 />;
      case "activity4":
        return <Activity4 />;
      case "activity5":
        return <Activity5 />;
      default:
        return (
          <div className="home">

            <h1 className="main-title">APPLICATION EMERGING TECHNOLOGIES EVOLUTION</h1>

            <p className="subtitle">FINAL MCO2</p>

            <div className="instructor-box">
              <h3>Instructor</h3>
              <p>Mr. Charl Alvarado</p>
            </div>

          </div>
        );
    }
  };

  return (
    <div className="mco">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">MCO2 ✨</div>

        <div className="nav-links">

          <button onClick={() => setPage("home")}>Home</button>

          {/* DROPDOWN */}
          <div className="dropdown">
            <button onClick={() => setOpen(!open)}>
              Activities ▾
            </button>

            {open && (
              <div className="dropdown-menu">
                <button onClick={() => setPage("activity1")}>Activity 1</button>
                <button onClick={() => setPage("activity2")}>Activity 2</button>
                <button onClick={() => setPage("activity3")}>Activity 3</button>
                <button onClick={() => setPage("activity4")}>Activity 4</button>
                <button onClick={() => setPage("activity5")}>Activity 5</button>
              </div>
            )}
          </div>

        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="content">
        {renderPage()}
      </main>

    </div>
  );
}