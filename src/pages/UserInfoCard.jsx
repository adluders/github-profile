import React from "react";
import UserDetail from "../components/UserDetail/UserDetail";
import BadgeBar from "../components/BadgeBar/BadgeBar";
import RepoHolder from "../components/Repos/RepoHolder";
import { Link } from "react-router-dom";

const UserInfoCard = ({ user }) => {
  return (
    <div className="UserInfoCard">
      <UserDetail user={user} />
      <div>
        <BadgeBar user={user} />
        <RepoHolder user={user} />
      </div>
      <div className="Profile">
        <Link target="_blank" to={`${user.html_url}`}>
          Visit Profile
        </Link>
      </div>
    </div>
  );
};

export default UserInfoCard;
