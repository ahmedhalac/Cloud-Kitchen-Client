import React, { Component } from "react";
import AddMenuName from "./AddMenuName";
import AddGroupMenu from "./AddGroupMenu";

class MenuName extends Component {
  render() {
    return (
      <div>
        <AddMenuName />
        <AddGroupMenu />
      </div>
    );
  }
}

export default MenuName;
