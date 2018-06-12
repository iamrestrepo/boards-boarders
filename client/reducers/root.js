import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import makerReducer from "./makerReducer";
import riderReducere from "./riderReducer";

const rootReducer = combineReducers({
  boards: boardReducer,
  makers: makerReducer,
  riders: riderReducere
});

export default rootReducer;
