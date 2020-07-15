import React from "react";

import Repo from "./Repo";

const RepoHolder = ({ repos }) => {
  return (
    <div className="RepoHolder">
      {repos
        .filter((item, idx) => idx < 4)
        .map((repo) => (
          <Repo repo={repo} key={repo.id} />
        ))}
    </div>
  );
};

export default RepoHolder;
