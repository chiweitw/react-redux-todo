import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./Layout/NavBar";
import Home from "./Layout/Home";
import Todo from "./Todo/index";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/todo" component={Todo} />
      </BrowserRouter>
    );
  }
}
