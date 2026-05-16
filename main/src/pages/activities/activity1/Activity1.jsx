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
          <h3>Project Name</h3>
          <p>Landing Page</p>
        </div>

        <div className="info-card">
          <h3>Subject</h3>
          <p>Application Development & Emerging Tech</p>
        </div>

        <div className="info-card">
          <h3>Final</h3>
          <p>MCO2</p>
        </div>
      </section>

      {/* HERO */}
      <section className="hero">
        <div className="sparkle">✨</div>
        <h1>Welcome to Our Fairytale World</h1>
        <p>Meet Our Dream Team</p>

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
        <h2>Our Enchanted Members</h2>

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
        <p>🌸 Group 1 • BSIT2C 🌸</p>
      </footer>

    </main>
  );
}