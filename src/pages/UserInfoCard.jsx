import React from "react";
import UserDetail from "../components/UserDetail/UserDetail";
import BadgeBar from "../components/BadgeBar/BadgeBar";
import RepoHolder from "../components/Repos/RepoHolder";

const UserInfoCard = ({ user, repos }) => {
  return (
    <div className="UserInfoCard">
      <UserDetail user={user} />
      <div>
        <BadgeBar user={user} />
        <RepoHolder repos={repos} />
      </div>
      <div className="Profile">
        <a target="_blank" rel="noopener noreferrer" href={`${user.html_url}`}>
          Visit Profile
        </a>
      </div>
    </div>
  );
};

export default UserInfoCard;
