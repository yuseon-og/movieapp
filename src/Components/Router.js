import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "../Routes/Home/HomeContainer";
import Search from "../Routes/Search/SearchContainer";
import Tv from "../Routes/Tv/TvContainer";
import Header from "./Header";
import Detail from "../Routes/Detail/DetailContainer";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/tv" component={Tv}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);

// /movie/id14
// /show/id14
