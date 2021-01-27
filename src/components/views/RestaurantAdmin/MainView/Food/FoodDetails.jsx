import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Select from "react-validation/build/select";
import "../../../../../assets/css/Admin.css";

import { connect } from "react-redux";
import { addFoodDetails } from "../../../../../actions/auth";
import { getFoodType } from "../../../../../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Ovo polje je obavezno!
      </div>
    );
  }
};

class FoodDetails extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeFoodName = this.onChangeFoodName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeIngredients = this.onChangeIngredients.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.onChangeDiscountEndTime = this.onChangeDiscountEndTime.bind(this);
    this.onChangeDiscountPrice = this.onChangeDiscountPrice.bind(this);
    this.onChangeFoodType = this.onChangeFoodType.bind(this);

    this.state = {
      name: "",
      price: "",
      ingredients: "",
      typeId: "1",
      image: "",
      discount_end_time: "",
      discount_price: "",
      successful: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(getFoodType());
  }

  //handling upload image
  handleUploadImage(e) {
    const input = e.target;
    let file = input.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (readerEvt) => {
      let binaryString = readerEvt.target.result;
      this.setState({
        image: binaryString,
      });
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  }

  onChangeFoodName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onChangeIngredients(e) {
    this.setState({
      ingredients: e.target.value,
    });
  }

  onChangeDiscountEndTime(e) {
    this.setState({
      discount_end_time: e.target.value,
    });
  }

  onChangeDiscountPrice(e) {
    this.setState({
      discount_price: e.target.value,
    });
  }

  onChangeFoodType(e) {
    this.setState({
      typeId: e.target.value,
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
          addFoodDetails(
            this.state.name,
            this.state.price,
            this.state.ingredients,
            this.state.typeId,
            this.state.image,
            this.state.discount_end_time,
            this.state.discount_price
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

  renderFoodTypes() {
    return this.props.foodTypes.map((type, index) => {
      return (
        <option key={index} value={type.id}>
          {type.name}
        </option>
      );
    });
  }

  render() {
    const { message } = this.props;
    return (
      <>
        <div className="add-user-text">
          <h4>Administracija artikala</h4>
        </div>
        <button
          type="button"
          className="btn custom-add btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i className="fa fa-user-plus fa-lg"></i>
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
                  Hrana detalji
                </h5>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
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
                        <label htmlFor="image">Slika</label>
                        <input
                          type="file"
                          accept="image/*"
                          className="form-control"
                          name="image"
                          onChange={this.handleUploadImage}
                        />
                      </div>
                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="name">Ime hrane</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="name"
                          value={this.state.name}
                          onChange={this.onChangeFoodName}
                          validations={[required]}
                        />
                      </div>
                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="price">Cijena</label>
                        <Input
                          type="number"
                          min="0"
                          step=".01"
                          className="form-control"
                          name="price"
                          value={this.state.price}
                          onChange={this.onChangePrice}
                          validations={[required]}
                        />
                      </div>
                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="ingredients">Sastojci</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="ingredients"
                          value={this.state.ingredients}
                          onChange={this.onChangeIngredients}
                          validations={[required]}
                        />
                      </div>
                      {/**OVO IZHENDLATI */}
                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="typeId">Tip Hrane</label>
                        <Select
                          className="form-control"
                          name="typeId"
                          onChange={this.onChangeFoodType}
                        >
                          {this.renderFoodTypes()}
                        </Select>
                      </div>

                      <div className="form-group w-75 mx-auto d-flex">
                        <label>Akcije</label>
                        <Input type="radio" name="type" checked="checked" />
                        Da
                        <Input type="radio" name="type" checked="checked" />
                        Ne
                      </div>

                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="discount_end_time">
                          Vrijeme akcije do
                        </label>
                        <Input
                          type="date"
                          id="disable"
                          className="form-control"
                          name="discount_end_time"
                          value={this.state.discount_end_time}
                          onChange={this.onChangeDiscountEndTime}
                        />
                      </div>
                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="discount_price">
                          Nova cijena artikla
                        </label>
                        <Input
                          type="number"
                          min="0"
                          step=".01"
                          className="form-control"
                          name="discount_price"
                          value={this.state.discount_price}
                          onChange={this.onChangeDiscountPrice}
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
    foodTypes: Object.values(state.restRed.foodTypes),
    message,
  };
}

export default connect(mapStateToProps)(FoodDetails);
