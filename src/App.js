import React, { useState, useEffect } from "react";

import { Switch, Route } from "react-router-dom";

import "./dist/css/main.css";
import UserInfoCard from "./pages/UserInfoCard";
import Navbar from "./components/UI/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  const userInfo = {
    id: 2,
    name: "Chris Wanstrath",
    login: "haitiann_papi",
    bio: "I love to code",
    avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
    repos: [
      {
        id: 15,
        name: "My Repo",
        language: "Python",
        created_at: "2008-06-12T18:30:10Z",
      },
      {
        id: 25,
        name: "Repo Two",
        language: "JavaScript",
        created_at: "2010-06-15T18:30:10Z",
      },
      {
        id: 35,
        name: "Repo Three",
        language: "HTML",
        created_at: "2009-06-01T18:30:10Z",
      },
      {
        id: 45,
        name: "Repo Four",
        language: "Ruby",
        created_at: "2020-06-25T18:30:10Z",
      },
    ],
    public_repos: 107,
    followers: 21007,
    following: 210,
    html_url: "https://github.com/defunkt",
  };

  // const getUsers = () => {
  //   // fetch(`https://api.github.com/users/defunkt`)
  //   //   .then((res) => res.json())
  //   //   .then((info) => setUser(info));
  //   Promise.all([
  //     fetch(
  //       `https://api.github.com/users/defunkt?client_id=c888cd015075c92de411&client_secret=1c1c68ec90cb05f2f523c26d1b4470eefc093a93`
  //     ),
  //     fetch(
  //       `https://api.github.com/users/defunkt/repos?per_page=5&sort=created:asc&client_id=c888cd015075c92de411&client_secret=1c1c68ec90cb05f2f523c26d1b4470eefc093a93`
  //     ),
  //   ])
  //     .then((res) => res.map((res2) => res2.json()))
  //     .then((data) => console.log(data));
  // };

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(userInfo);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path={`/user`}
          component={() => <UserInfoCard user={user} />}
        />
      </Switch>
    </div>
  );
};

export default App;
