import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Board from "./Board.jsx";
import Rider from "./Rider.jsx";
import Maker from "./Maker.jsx";
import Navbar from "./basicComponents/Navbar.jsx";
import LandingPage from "./LandingPage.jsx";

export default class Main extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div>
          <Navbar />
        </div>
        <div className="main-wrapper">
          <Switch>
            <Route path="/" exact component={LandingPage} location={location} />
            <Route exact path="/board" component={Board} />
            <Route exact path="/maker" component={Maker} />
            <Route exact path="/rider" component={Rider} />
          </Switch>
        </div>
      </div>
    );
  }
}
