import React, { Component } from "react";
import "../../../assets/css/Admin.css";

import UserService from "../../../services/userService";
import Sidebar from "../../Sidebar/Sidebar";
import MainView from "../RestaurantAdmin/MainView/MainView";
import Forbidden from "../../Forbidden";

import sidebarPic from "../../../assets/img/sidebar_radmin.jfif";
import logo from "../../../assets/img/logo.png";
import restaurantIcon from "../../../assets/img/icons/restaurant_icon.svg";
import homeIcon from "../../../assets/img/icons/home.svg";
import deliverer from "../../../assets/img//icons/delivery-man.svg";
import businessman from "../../../assets/img//icons/businessman.svg";

export default class RestaurantAdminComponent extends Component {
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
    { name: "Dashboard", to: "/restaurant_admin", icon: homeIcon },
    {
      name: "Dostavljač",
      to: "/restaurant_admin/add-deliverer",
      icon: deliverer,
    },
    {
      name: "Administracija artikala",
      to: "/restaurant_admin/food-details",
      icon: businessman,
    },
    {
      name: "Restoran",
      to: "/restaurant_admin/restaurant",
      icon: restaurantIcon,
    },
    {
      name: "Grupni Meniji",
      to: "/restaurant_admin/group-menu",
      icon: restaurantIcon,
    },
  ];
  componentDidMount() {
    UserService.getRestaurantAdminBoard().then(
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
            <i className="fad fa-sign-out-alt fa-2x"></i>
          </a>
        </div>
        <MainView />
      </div>
    );
  }
}
