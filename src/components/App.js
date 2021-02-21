import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/App.css";

import LoginComponent from "./views/LoginComponent";
import RegisterComponent from "./views/RegisterComponent";
import HomeComponent from "./views/HomeComponent";
import ProfileComponent from "./views/ProfileComponent";
import BoardCustomer from "./views/CustomerComponent";
import RestaurantAdmin from "./views/RestaurantAdmin/RestaurantAdminComponent";
import Admin from "./views/Admin/Admin";
import BoardDeliverer from "./views/DelivererComponent";
import GroupMenu from "./views/GroupMenu";
import Order from "./views/Order";

import { logout } from "../actions/auth";
import { clearMessage } from "../actions/message";

import { history } from "../helpers/history";
import NotFound from "./NotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={"/"} component={HomeComponent} />
          <Route exact path="/login" component={LoginComponent} />
          <Route exact path="/register" component={RegisterComponent} />
          <Route exact path="/profile" component={ProfileComponent} />
          <Route exact path="/group-menu" component={GroupMenu} />
          <Route
            exact
            path="/user"
            render={() => <BoardCustomer logOut={this.logOut} />}
          />
          <Route path="/admin" render={() => <Admin logOut={this.logOut} />} />
          <Route
            path="/restaurant_admin"
            render={() => <RestaurantAdmin logOut={this.logOut} />}
          />
          <Route exact path="/deliverer" component={BoardDeliverer} />
          <Route exact path="/order" component={Order} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
