import React from "react";
import Profile from "../../profile.jpg";

const UserDetail = () => {
  return (
    <div className="User">
      <div className="User__Avatar">
        <img src={Profile} alt="User" />
      </div>
      <div className="User__Info">
        <h1>Name</h1>
        <h2>UserName</h2>
        <p>Bio</p>
      </div>
    </div>
  );
};

export default UserDetail;
