import React from "react";
import Badge from "./Badge";

const BadgeBar = ({ user }) => {
  return (
    <div className="BadgeBar">
      <Badge text={`Followers`} stat={user.followers} />
      <Badge text={`Following`} stat={user.following} />
      <Badge text={`Repos`} stat={user.public_repos} />
    </div>
  );
};

export default BadgeBar;
