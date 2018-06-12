import React, { Component } from "react";
import { connect } from "react-redux";
import DisplayInfoAsList from "../presentationalComponents/DisplayInfoAsList.jsx";
import { goGetRidersFromServer } from "../reducers/riderReducer";

export class Rider extends Component {
  componentDidMount() {
    this.props.getRiders();
  }
  render() {
    const riders = this.props.riders;
    if (riders < 1) {
      return <h3>loading...</h3>;
    } else {
      return <DisplayInfoAsList actualInfo={riders} />;
    }
  }
}

const mapStatetoProps = state => ({
  riders: state.riders
});

const mapDispatchToProps = dispatch => ({
  getRiders: () => {
    dispatch(goGetRidersFromServer());
  }
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Rider);
