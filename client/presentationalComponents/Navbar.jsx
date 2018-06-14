import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <AppBar position="static" color="primary">
        <Button color="inherit" href="#/board">
          Boards
        </Button>
        <Button color="inherit" href="#/maker">
          Makers
        </Button>
        <Button color="inherit" href="#/rider">
          Riders
        </Button>
      </AppBar>
    );
  }
}
