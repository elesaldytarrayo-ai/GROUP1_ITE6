import React, { useState, useEffect } from "react";
import UserCard from "../../../components/user-card/UserCard";
import "./Activity4.css";

// ✅ IMPORT ALL IMAGES (FIXED)
import avatar from "../../../assets/users/avatar.jpg";
import avengers from "../../../assets/users/avengers.jpg";
import batman from "../../../assets/users/batman.jpg";
import cinderlla from "../../../assets/users/cinderella.jpg";
import deadpool from "../../../assets/users/deadpool.jpg";
import inception from "../../../assets/users/inception.jpg";
import interstellar from "../../../assets/users/interstellar.jpg";
import ironman from "../../../assets/users/ironman.jpg";
import joker from "../../../assets/users/joker.jpg";
import matrix from "../../../assets/users/matrix.jpg";
import spiderman from "../../../assets/users/spiderman.jpg";

function Activity4() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const images = [
          avatar,
          avengers,
          batman,
          cinderlla,
          deadpool,
          inception,
          interstellar,
          ironman,
          joker,
          matrix,
          spiderman,
        ];

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