import React from "react";
// import Profile from "../../profile.jpg";

const UserDetail = ({ user }) => {
  return (
    <div className="User">
      <div className="User__Avatar">
        <img src={user.avatar_url} alt="User" />
      </div>
      <div className="User__Info">
        <h1>{user.name}</h1>
        <h2>{user.login}</h2>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default UserDetail;
