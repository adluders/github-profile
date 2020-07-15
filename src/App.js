import React, { useState, useEffect } from "react";

import { Switch, Route } from "react-router-dom";

import "./dist/css/main.css";
import UserInfoCard from "./pages/UserInfoCard";
import Navbar from "./components/UI/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const getUsersData = async () => {
    const user = await fetch(`https://api.github.com/users/adluders`, {
      method: "GET",
      headers: {
        Authorization: [
          "c888cd015075c92de411: token 1c1c68ec90cb05f2f523c26d1b4470eefc093a93",
        ],
      },
    });

    const userInfo = await user.json();

    const repos = await fetch(
      `https://api.github.com/users/${userInfo.login}/repos`,
      {
        method: "GET",
        headers: {
          Authorization: [
            "c888cd015075c92de411: token 1c1c68ec90cb05f2f523c26d1b4470eefc093a93",
          ],
        },
      }
    );

    const reposDetails = await repos.json();

    setUser(userInfo);
    setRepos(reposDetails);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path={`/user/:username`}
          component={() => <UserInfoCard user={user} repos={repos} />}
        />
      </Switch>
    </div>
  );
};

export default App;
