import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

import "../../../../../assets/css/Restaurant.css";

import Cards from "../../../../Cards";

import { addRestaurant } from "../../../../../actions/auth";
import { getRestaurants } from "../../../../../actions/auth";
import { getRestaurantTypes } from "../../../../../actions/auth";

class RestaurantEdit extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeStars = this.onChangeStars.bind(this);
    this.onChangeRestaurantType = this.onChangeRestaurantType.bind(this);

    this.state = {
      name: "",
      address: "",
      city: "",
      stars: "2",
      typeId: "1",
      successful: false,
    };
  }
  componentDidMount() {
    this.props.dispatch(getRestaurantTypes());
    this.props.dispatch(getRestaurants());
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  onChangeStars(e) {
    this.setState({
      stars: e.target.value,
    });
  }

  onChangeRestaurantType(e) {
    this.setState({
      typeId: e.target.value,
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
          addRestaurant(
            this.state.name,
            this.state.address,
            this.state.city,
            this.state.stars,
            this.state.typeId
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
  };

  renderRestaurantTypes() {
    return this.props.resTypes.map((type, index) => {
      return (
        <option key={index} value={type.id}>
          {type.name}
        </option>
      );
    });
  }

  renderRestaurants() {
    return this.props.rest.map((type, index) => {
      return (
        <div className="card-items" key={index}>
          <Cards
            key={index}
            id={type.id}
            name={type.name}
            address={type.address}
            city={type.city}
            stars={type.stars}
            typeId={type.typeId}
            deliver_distance={type.deliver_distance}
          />
        </div>
      );
    });
  }

  render() {
    const { message } = this.props;
    return (
      <Fragment>
        <div className="add-user-text">
          <h4>Uređivanje podataka o restoranu</h4>
        </div>

        <div className="card-container">{this.renderRestaurants()}</div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    rest: Object.values(state.restRed.rest),
    resTypes: Object.values(state.restRed.resTypes),
    message,
  };
}

export default connect(mapStateToProps)(RestaurantEdit);
