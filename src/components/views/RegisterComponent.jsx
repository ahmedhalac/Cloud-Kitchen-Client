import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { register } from "../../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vFirstName = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        First name must be between 3 and 20 characters.
      </div>
    );
  }
};

const vLastName = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        Last name must be between 3 and 20 characters.
      </div>
    );
  }
};

const vaddress = (value) => {
  if (value.length < 3) {
    return (
      <div className="alert alert-danger" role="alert">
        Adress must be greater than 3.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      password: "",
      role: "customer",
      successful: false,
    };
  }

  onChangeFirstName(e) {
    this.setState({
      first_name: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  /*onChangeRole(e) {
    this.setState({
      role: e.target.value,
    });
  }*/

  handleRegister(e) {
    e.preventDefault();
    this.setState({
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(
          register(
            this.state.first_name,
            this.state.last_name,
            this.state.email,
            this.state.address,
            this.state.password,
            this.state.role
          )
        )
        .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
    }
  }

  render() {
    const { message } = this.props;

    return (
      <div className="col-md-12">
        <div className="card card-container">
          <i
            className="fal fa-user-plus profile-img-card fa-4x"
            aria-hidden="true"
          ></i>

          <Form
            onSubmit={this.handleRegister}
            autoComplete="off"
            ref={(c) => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="input-container">
                  <Input
                    type="text"
                    className="input"
                    placeholder="Ime"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.onChangeFirstName}
                    validations={[required, vFirstName]}
                  />
                </div>

                <div className="input-container">
                  <Input
                    type="text"
                    className="input"
                    placeholder="Prezime"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.onChangeLastName}
                    validations={[required, vLastName]}
                  />
                </div>

                <div className="input-container">
                  <Input
                    type="text"
                    className="input"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="input-container">
                  <Input
                    type="text"
                    className="input"
                    placeholder="Adresa"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                    validations={[required, vaddress]}
                  />
                </div>

                <div className="input-container">
                  <Input
                    autoComplete="new-password"
                    type="password"
                    placeholder="Lozinka"
                    className="input"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary rl btn-block">
                    Registruj se
                  </button>
                </div>
              </div>
            )}

            {message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
            <p className="forgot-password text-right">
              Već imaš kreiran račun? <a href="/login">Prijavi se</a>
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
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(RegisterComponent);
