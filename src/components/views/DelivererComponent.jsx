import React, { Component } from "react";

import UserService from "../../services/userService";
import Forbidden from "../Forbidden";

export default class DelivererComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      err: false,
    };
  }

  componentDidMount() {
    UserService.getDelivererBoard().then(
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
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}
