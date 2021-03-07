import React from "react";
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home/HomeContainer";
import Search from "../Routes/Search/SearchContainer";
import Tv from "../Routes/Tv/TvContainer";
import Header from "./Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/tv" component={Tv}></Route>
        <Route path="/search" component={Search}></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
