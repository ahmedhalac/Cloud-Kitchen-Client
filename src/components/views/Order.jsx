import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/css/Order.css";

import { getOrderData } from "../../actions/auth";

function groupBy(data, key) {
  return data.reduce((acc, x) => {
    acc[x[key]] = [...(acc[x[key]] || []), x];
    return acc;
  }, {});
}

class Order extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(getOrderData());
  }
  render() {
    const { orderData } = this.props;
    const orders = groupBy(orderData, "food_type");
    return (
      <div className="container-fluid">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <a href="/" className="homepage">
            <button className="btn btn-primary home">Nazad na početnu</button>
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
                    <div className="quantity">
                      <input
                        type="number"
                        class="form-control w-50"
                        placeholder="0"
                        id="quantity"
                      ></input>
                    </div>
                    <div className="order-price">
                      <button className="btn btn-primary order-btn">
                        {" "}
                        BAM {order.price} | Dodaj u korpu
                      </button>
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
  return {
    orderData: Object.values(state.restRed.orderData),
  };
}

export default connect(mapStateToProps)(Order);
