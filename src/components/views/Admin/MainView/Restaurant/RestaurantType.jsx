import React, { Component, Fragment } from "react";
import { addRestaurantType } from "../../../../../actions/auth";
import { getRestaurantTypes } from "../../../../../actions/auth";
import RestTypeCard from "./RestTypeCard";
import "../../../../../assets/css/Restaurant.css";

import { connect } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Ovo polje je obavezno!
      </div>
    );
  }
};

class RestaurantType extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeName = this.onChangeName.bind(this);

    this.state = {
      name: "",
      successful: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(getRestaurantTypes());
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleRegister = (e) => {
    e.preventDefault();
    this.setState({
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(addRestaurantType(this.state.name))

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
  };

  renderRestaurantTypes() {
    return this.props.resTypes.map((type, index) => {
      return (
        <div className="card-items" key={index}>
          <RestTypeCard key={index} id={type.id} name={type.name} />
        </div>
      );
    });
  }

  render() {
    const { message } = this.props;
    return (
      <Fragment>
        <div className="add-user-text">
          <h4>CRUD za Tip Restorana</h4>
        </div>
        <button
          type="button"
          className="btn custom-add btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
          <span className="ml-1">Dodaj</span>
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Tip Restorana
                </h5>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span
                    aria-hidden="true"
                    onClick={() => window.location.reload(false)}
                  >
                    &times;
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <Form
                  onSubmit={this.handleRegister}
                  autoComplete="off"
                  ref={(c) => {
                    this.form = c;
                  }}
                >
                  {!this.state.successful && (
                    <div>
                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="first_name">Tip Restorana</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="name"
                          value={this.state.name}
                          onChange={this.onChangeName}
                          validations={[required]}
                        />
                      </div>

                      <div className="form-group w-75 mx-auto">
                        <button
                          type="button"
                          className="btn custom btn-danger"
                          data-dismiss="modal"
                        >
                          <i
                            className="fa fa-times fa-lg"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <button className="btn custom-success btn-success ml-4">
                          Spremi
                        </button>
                      </div>
                    </div>
                  )}

                  {message && (
                    <div className="form-group w-75 mx-auto">
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

                  <CheckButton
                    style={{ display: "none" }}
                    ref={(c) => {
                      this.checkBtn = c;
                    }}
                  />
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">{this.renderRestaurantTypes()}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { message } = state.message;
  return {
    resTypes: Object.values(state.restRed.resTypes),
    message,
  };
};

export default connect(mapStateToProps)(RestaurantType);
