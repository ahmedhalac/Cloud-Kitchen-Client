import React, { Component } from "react";
import Form from "react-validation/build/form";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import "../../../../../assets/css/Admin.css";

import { connect } from "react-redux";
import {
  getRestaurants,
  getFood,
  getMenuName,
  addGroupMenu,
} from "../../../../../actions/auth";

class AddMenuName extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeRestaurant = this.onChangeRestaurant.bind(this);
    this.onChangeMenuName = this.onChangeMenuName.bind(this);
    this.onChangeFood = this.onChangeFood.bind(this);

    this.state = {
      restaurantId: "",
      menuNameId: "",
      foodId: "",
      successful: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(getRestaurants());
    this.props.dispatch(getMenuName());
    this.props.dispatch(getFood());
  }

  onChangeRestaurant(e) {
    this.setState({
      restaurantId: e.target.value,
    });
  }

  onChangeMenuName(e) {
    this.setState({
      menuNameId: e.target.value,
    });
  }

  onChangeFood(e) {
    this.setState({
      foodId: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();
    this.setState({
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(
          addGroupMenu(
            this.state.restaurantId,
            this.state.menuNameId,
            this.state.foodId
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

  renderRestaurants() {
    return this.props.rest.map((res, index) => {
      return (
        <option key={index} value={res.id}>
          {res.name}
        </option>
      );
    });
  }

  renderMenuNames() {
    return this.props.menuNames.map((menuName, index) => {
      return (
        <option key={index} value={menuName.id}>
          {menuName.menu_name}
        </option>
      );
    });
  }

  renderFoods() {
    return this.props.foods.map((food, index) => {
      return (
        <option key={index} value={food.id}>
          {food.name}
        </option>
      );
    });
  }

  render() {
    const { message } = this.props;
    return (
      <>
        <div className="add-user-text">
          <h4>Kreiranje grupnog menija</h4>
        </div>
        <button
          type="button"
          className="btn custom-add btn-primary"
          data-toggle="modal"
          data-target="#groupMenu"
        >
          <i className="fal fa-user-plus fa-lg"></i>
        </button>

        <div
          className="modal fade"
          id="groupMenu"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Grupni meni
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
                        <label htmlFor="password">Restoran</label>
                        <Select
                          className="form-control"
                          name="restaurantId"
                          onChange={this.onChangeRestaurant}
                        >
                          {this.renderRestaurants()}
                        </Select>
                      </div>

                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="password">Ime menija</label>
                        <Select
                          className="form-control"
                          name="menuNameId"
                          onChange={this.onChangeMenuName}
                        >
                          {this.renderMenuNames()}
                        </Select>
                      </div>

                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="password">Hrana</label>
                        <Select
                          className="form-control"
                          name="foodId"
                          onChange={this.onChangeFood}
                        >
                          {this.renderFoods()}
                        </Select>
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
                          <i
                            className="fa fa-floppy-o fa-lg"
                            aria-hidden="true"
                          ></i>
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
      </>
    );
  }
}

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    rest: Object.values(state.restRed.rest),
    foods: Object.values(state.restRed.food),
    menuNames: Object.values(state.restRed.menuNames),
    message,
  };
}

export default connect(mapStateToProps)(AddMenuName);
