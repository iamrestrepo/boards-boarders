import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Board from "../containerComponents/Board.jsx";
import Rider from "../containerComponents/Rider.jsx";
import Maker from "../containerComponents/Maker.jsx";
import Navbar from "./Navbar.jsx";
import LandingPage from "./LandingPage.jsx";

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div>
          <Navbar />
        </div>
        <div className="all-content-wrapper">
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
