import React from "react";
import ReactDOM from "react-dom"; //to take what is converted and taken to browser to be seen
import AppRouter from "./routers/AppRouter";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import Provider from "react-redux";
import store from "./redux/store";

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

ReactDOM.render(<ReduxApp />, document.getElementById("app"));
