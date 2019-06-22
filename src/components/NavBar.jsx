import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/todo">Todo</a>
        </li>
      </ul>
    );
  }
}
