import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "../../assets/css/Order.css";

import { getOrderData, addOrder } from "../../actions/auth";

function groupBy(data, key) {
  return data.reduce((acc, x) => {
    acc[x[key]] = [...(acc[x[key]] || []), x];
    return acc;
  }, {});
}

class Order extends Component {
  constructor(props) {
    super(props);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);

    this.state = {
      quantity: "",
      food_name: "",
      price: "",
      successful: false,
    };
  }
  componentDidMount() {
    this.props.dispatch(getOrderData());
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value,
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
        .dispatch(
          addOrder(this.state.food_name, this.state.quantity, this.state.price)
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
  };

  render() {
    const { message } = this.props;
    const { orderData } = this.props;
    const orders = groupBy(orderData, "food_type");
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light bg-light">
          <a href="/" className="homepage">
            <button className="btn btn-primary home">Početna</button>
          </a>
          <a href="/order-details" className="cart">
            <button className="btn btn-primary cart-btn">
              <i className="fas fa-cart-arrow-down fa-2x"></i>
            </button>
          </a>
        </nav>
        {Object.entries(orders).map(([foodType, data]) => {
          return (
            <div className="row order w-100" key={foodType}>
              <h2 className="food-type w-100">{foodType}</h2>
              {data.map((order, index) => {
                return (
                  <div key={index} className="col-sm-4">
                    <img className="order-img" src={order.image} />
                    <h4 className="food-name">{order.food_name}</h4>
                    <p>{order.ingredients}</p>
                    <div className="price">
                      <h4>BAM {order.price}</h4>
                    </div>

                    <div className="order-price">
                      <button
                        type="button"
                        className="btn btn-primary order-btn"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={() => {
                          this.setState({
                            food_name: order.food_name,
                          });
                          this.setState({
                            price: order.price,
                          });
                        }}
                      >
                        <i className="fal fa-shopping-cart fa-lg mr-2"></i>
                        Dodaj u korpu
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
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Naruči
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
                                      <label>Izabrana hrana</label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="selected_food"
                                        value={this.state.food_name}
                                        disabled
                                      />
                                    </div>
                                    <div className="form-group w-75 mx-auto">
                                      <label>Količina</label>
                                      <Input
                                        type="number"
                                        className="form-control"
                                        name="quantity"
                                        value="0"
                                        onChange={this.onChangeQuantity}
                                      />
                                    </div>
                                    <div className="form-group w-75 mx-auto">
                                      <label>Cijena</label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="price"
                                        value={this.state.price}
                                        disabled
                                      />
                                    </div>

                                    <div className="form-group w-75 mx-auto">
                                      <button
                                        type="button"
                                        className="btn custom btn-danger"
                                        data-dismiss="modal"
                                      >
                                        Odustani
                                      </button>
                                      <button className="btn custom-success btn-success ml-4">
                                        Naruči
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
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
    orderData: Object.values(state.restRed.orderData),
  };
}

export default connect(mapStateToProps)(Order);
