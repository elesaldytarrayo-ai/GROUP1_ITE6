import React, { useState, useEffect } from "react";
import UserCard from "../../../components/user-card/UserCard";
import "./Activity4.css";

// IMPORT ALL IMAGES
function Activity4() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const images = [avatar, avengers, batman, cinderlla, deadpool, inception, 
            interstellar, ironman, joker, matrix, spiderman,];

        const updatedUsers = data.map((user, index) => ({
          ...user,
          image: images[index] || avatar,
        }));

        setUsers(updatedUsers);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page">
      <h1 className="title">User List</h1>

      <div className="container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Activity4;