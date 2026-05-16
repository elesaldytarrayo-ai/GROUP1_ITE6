import "./Activity1.css";

export default function Activity1() {
  return (
    <main className="landing">
      <section className="hero">
        <h1>Welcome to Our Landing Page</h1>
        <p>Meet Our Team</p>
      </section>

      <section className="group-photo">
        <img src={groupPhoto} alt="Group Photo" />
      </section>

      <section className="members">
        <h2>Our Members</h2>

        <div className="member-list">
          <div className="member-card"><h3>Angelica Labbao</h3></div>
          <div className="member-card"><h3>Jelyza Francisco</h3></div>
          <div className="member-card"><h3>Melvin Lumanta</h3></div>
          <div className="member-card"><h3>Jane Clea Genoguin</h3></div>
          <div className="member-card"><h3>John Lorenz Jaropojop</h3></div>
        </div>
      </section>

      <footer className="footer">
        <p>Group 1</p>
      </footer>
    </main>
  );
}