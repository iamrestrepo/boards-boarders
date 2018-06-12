import Redux from "redux";
import axios from "axios";

const initialState = [];

//consts

const GOT_RIDERS_FROM_SERVER = "GOT_RIDERS_FROM_SERVER";

//action creators

export const gotRidersFromServer = riders => ({
  type: GOT_RIDERS_FROM_SERVER,
  riders: riders
});

// thunk

export const goGetRidersFromServer = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/rider");
    console.log("riders have arrived to riderReducer");
    dispatch(gotRidersFromServer(data));
  };
};

//reducer

const riderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GOT_RIDERS_FROM_SERVER": {
      return [...action.riders];
    }
    default:
      return state;
  }
};

export default riderReducer;
