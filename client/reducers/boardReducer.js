import Redux from "redux";
import axios from "axios";

const initialState = [];
// consts
const GOT_BOARDS_FROM_SERVER = "GOT_BOARDS_FROM_SERVER";
// actions creator
export const gotBoardsFromServer = boards => ({
  type: GOT_BOARDS_FROM_SERVER,
  boards: boards
});

//thunk -> the guy who does the dirty job B)
export const goGetBoardsFromServer = () => {
  return async dispatch => {
    const { data } = await axios.get(`/api/board`);
    console.log("boards have arrived to boardReducer");
    dispatch(gotBoardsFromServer(data));
  };
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GOT_BOARDS_FROM_SERVER": {
      return [...action.boards];
    }
    default:
      return state;
  }
};
export default boardReducer;
