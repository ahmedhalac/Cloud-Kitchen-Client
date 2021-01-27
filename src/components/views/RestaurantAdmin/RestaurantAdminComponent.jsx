import React, { Component } from "react";
import "../../../assets/css/Admin.css";

import UserService from "../../../services/userService";
import Sidebar from "../../Sidebar/Sidebar";
import MainView from "../RestaurantAdmin/MainView/MainView";
import Forbidden from "../../Forbidden";

import logo from "../../../assets/img/logo.png";

export default class RestaurantAdminComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      err: false,
    };
  }

  logoIcon = logo;
  menuItems = [
    { name: "Dashboard", to: "/restaurant_admin", icon: "" },
    { name: "Dostavljač", to: "/restaurant_admin/add-deliverer", icon: "" },
    {
      name: "Administracija artikala",
      to: "/restaurant_admin/food-details",
      icon: "",
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
        <Sidebar menuItems={this.menuItems} logoIcon={this.logoIcon} />
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
