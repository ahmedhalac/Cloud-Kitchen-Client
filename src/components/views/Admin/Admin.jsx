import "../../../assets/css/Admin.css";
import React, { Component } from "react";

import logo from "../../../assets/img/logo.png";
import sidebarPic from "../../../assets/img/admin_pic.jfif";

//icons
import homeIcon from "../../../assets/img/icons/home.svg";
import aboutIcon from "../../../assets/img/icons/about.svg";
import restaurantIcon from "../../../assets/img/icons/restaurant_icon.svg";
import foodTypeIcon from "../../../assets/img/icons/food_type.png";
import restTypeIcon from "../../../assets/img/icons/rest_type.png";

import Sidebar from "../../Sidebar/Sidebar";
import MainView from "../Admin/MainView/MainView";
import Forbidden from "../../Forbidden";

import UserService from "../../../services/userService";

export default class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      err: false,
    };
  }

  sidebarPic = sidebarPic;
  logoIcon = logo;
  menuItems = [
    { name: "Dashboard", to: "/admin/", icon: homeIcon },
    { name: "Korisnik", to: "/admin/add-user", icon: aboutIcon },
    { name: "Restoran", to: "/admin/restaurant", icon: restaurantIcon },
    { name: "Tip Restorana", to: "/admin/restaurant-type", icon: restTypeIcon },
    { name: "Tip Hrane", to: "/admin/food-type", icon: foodTypeIcon },
  ];

  componentDidMount() {
    UserService.getAdminBoard().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
          err: true,
        });
      }
    );
  }
  handleCLick() {
    console.log("Clicked");
  }

  render() {
    if (this.state.err) {
      return <Forbidden />;
    }
    return (
      <div className="admin">
        <Sidebar
          menuItems={this.menuItems}
          logoIcon={this.logoIcon}
          sidebarPic={this.sidebarPic}
        />
        <div className="logout" onClick={this.props.logOut}>
          <a href="/login">
            <i className="fa fa-sign-out fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <MainView />
      </div>
    );
  }
}
