import "./Activity1.css";
import groupPhoto from "../../../assets/group-photo/groupPhoto.jpg";

export default function Activity1() {
  return (
    <main className="landing">

      {/* FLOATING BACKGROUND */}
      <div className="floating-bg">
        <span>✨</span>
        <span>🌸</span>
        <span>💫</span>
        <span>🦋</span>
      </div>

      {/* INFO */}
      <section className="info-panel">
        <div className="info-card">
          <h3>PROJECT</h3>
          <p>Landing Page Evolution</p>
        </div>

        <div className="info-card">
          <h3>TECH STYLE</h3>
          <p>Fairy × Sci-Fi Hybrid UI</p>
        </div>

        <div className="info-card">
          <h3>VERSION</h3>
          <p>MCO2 Enhanced</p>
        </div>
      </section>

      {/* HERO */}
      <section className="hero">
        <div className="sparkle">✨</div>

        <h1>Welcome to a Digital Fairytale</h1>
        <p>Where Fantasy Meets Holographic Reality</p>

        <div className="hero-btns">
          <button className="primary-btn">Explore Team</button>
          <button className="secondary-btn">View Project</button>
        </div>
      </section>

      {/* GROUP PHOTO */}
      <section className="group-photo">
        <img src={groupPhoto} alt="Group Photo" />
      </section>

      {/* MEMBERS */}
      <section className="members">
        <h2>Enchanted Team Members</h2>

        <div className="member-list">
          <div className="member-card"><h3>Angelica Labbao</h3></div>
          <div className="member-card"><h3>Jelyza Francisco</h3></div>
          <div className="member-card"><h3>Melvin Lumanta</h3></div>
          <div className="member-card"><h3>Jane Clea Genoguin</h3></div>
          <div className="member-card"><h3>John Lorenz Jaropojop</h3></div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="instructor">
        <h2>Instructor</h2>
        <div className="instructor-card">
          <h3>Mr. Charl Alvarado</h3>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>✨ Group 1 • BSIT2C • MCO2 ✨</p>
      </footer>

    </main>
  );
}