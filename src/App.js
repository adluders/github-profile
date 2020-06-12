import React from "react";

import { Switch, Route } from "react-router-dom";

import "./dist/css/main.css";
import UserInfoCard from "./pages/UserInfoCard";
import Navbar from "./components/UI/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path={`/user`} component={UserInfoCard} />
      </Switch>
    </div>
  );
};

export default App;
