import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/root";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
// import { devToolsEnhancer } from 'redux-devtools-extension';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware, createLogger()))
);

export default store;
