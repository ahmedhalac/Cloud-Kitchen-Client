import "../../assets/css/Login.css";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login } from "../../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Ovo polje je obavezno!
      </div>
    );
  }
};

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();
    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { user, dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.email, this.state.password))
        .then(() => {
          history.push(`/${user.roles}`);

          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false,
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { user, isLoggedIn, message } = this.props;
    if (isLoggedIn) {
      return <Redirect to={`/${user.roles}`} />;
    }
    return (
      <div className="col-md-12 login-page">
        <div className="card card-container">
          <i
            className="fal fa-user profile-img-card fa-4x"
            aria-hidden="true"
          ></i>

          <Form
            onSubmit={this.handleLogin}
            autoComplete="off"
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className="input-container">
              <Input
                type="text"
                name="email"
                placeholder="Email"
                className="input"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required]}
              />
            </div>

            <div className="input-container">
              <Input
                autoComplete="new-password"
                type="password"
                className="input"
                placeholder="Lozinka"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary rl btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Prijavi se</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <p className="forgot-password text-right">
              Nisi registrovan? <a href="/register">Registruj se</a>
            </p>
            <p className="text-right">
              <a href="/">Nazad na početnu</a>
            </p>
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  const { user } = state.auth;
  return {
    isLoggedIn,
    message,
    user,
  };
}

export default connect(mapStateToProps)(LoginComponent);
