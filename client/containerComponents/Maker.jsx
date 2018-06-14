import React, { Component } from "react";
import { connect } from "react-redux";
import { goGetMakersFromServer } from "../reducers/makerReducer";
import DisplayInfoAsList from "../presentationalComponents/DisplayInfoAsList.jsx";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

export class Maker extends Component {
  componentDidMount() {
    this.props.getMakers();
  }
  render() {
    const makers = this.props.makers;
    console.log(makers);
    if (makers < 1) {
      return <h3>loading...</h3>;
    } else {
      return (
        <div>
          <Button variant="fab" color="secondary">
            <AddIcon />
          </Button>
          <DisplayInfoAsList actualInfo={makers} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  makers: state.makers
});

const mapDispatchToProps = dispatch => ({
  getMakers: () => {
    dispatch(goGetMakersFromServer());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Maker);
