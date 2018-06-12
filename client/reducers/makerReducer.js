import Redux from "redux";
import axios from "axios";

const initialState = [];

//consts

const GOT_MAKERS_FROM_SERVER = "GOT_MAKERS_FROM_SERVER";

// action creator

export const gotMakersFromServer = makers => ({
  type: GOT_MAKERS_FROM_SERVER,
  makers: makers
});

// thunk

export const goGetMakersFromServer = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/maker");
    console.log("makers got to makerReducer");
    dispatch(gotMakersFromServer(data));
  };
};

const makerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GOT_MAKERS_FROM_SERVER": {
      return [...action.makers];
    }
    default:
      return state;
  }
};

export default makerReducer;
