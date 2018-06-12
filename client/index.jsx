import React from "react";
import "../public/style.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import Main from "./presentationalComponents/Main.jsx";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Main />
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);
