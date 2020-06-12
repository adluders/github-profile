import React from "react";
import UserDetail from "../components/UserDetail/UserDetail";
import BadgeBar from "../components/BadgeBar/BadgeBar";
import RepoHolder from "../components/Repos/RepoHolder";

const UserInfoCard = () => {
  return (
    <div className="UserInfoCard">
      <UserDetail />
      <div>
        <BadgeBar />
        <RepoHolder />
      </div>
      <div className="Profile">
        <button>Visit Profile</button>
      </div>
    </div>
  );
};

export default UserInfoCard;
