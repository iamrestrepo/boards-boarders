import React from "react";
import "../public/css/style.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import Main from "./presentationalComponents/Main.jsx";
import { HashRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DarkTheme, {
  darkBaseTheme
} from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Provider store={store}>
      <HashRouter>
        <Main />
      </HashRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("app")
);
