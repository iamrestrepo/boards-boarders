import React, { Component } from "react";
import { connect } from "react-redux";
import { goGetBoardsFromServer } from "../reducers/boardReducer";
import DisplayInfoAsList from "../presentationalComponents/DisplayInfoAsList.jsx";
export class Board extends Component {
  componentDidMount() {
    this.props.getBoards();
  }
  render() {
    const boards = this.props.boards;
    if (boards.length < 1) {
      return <h3>loading...</h3>;
    } else {
      console.log("here it falls!");
      console.log(this.props.boards);
      return <p> {this.props.boards[1].name} </p>;
    }
  }
}

const mapStateToProps = state => ({
  boards: state.boards
});

const mapDispatchtoProps = dispatch => ({
  getBoards: () => {
    dispatch(goGetBoardsFromServer());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Board);
