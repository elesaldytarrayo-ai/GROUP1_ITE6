import "./UserCard.css";

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="avatar">
        <img src={user.image} alt={user.name} />
      </div>

      <div className="info">
        <h2>{user.name}</h2>
        <h4>{user.role}</h4>
        <p>{user.description}</p>

        <button className="btn">View Profile</button>
      </div>
    </div>
  );
}