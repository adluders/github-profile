import React from "react";

import Repo from "./Repo";

const RepoHolder = ({ user }) => {
  // const [repos, setRepos] = useState([]);

  // const userRepo = () => {
  //   fetch(`https://api.github.com/users/defunkt/repos`)
  //     .then((data) => data.json())
  //     .then((res) => setRepos(res));
  // };

  return (
    <div className="RepoHolder">
      {user.repos &&
        user.repos.map((repo) => <Repo key={repo.id} repo={repo} />)}
    </div>
  );
};

export default RepoHolder;
