import React from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Select from "react-validation/build/select";
import { connect } from "react-redux";

import { getRestaurantTypes } from "../../../../../actions/auth";
import { editRestaurant } from "../../../../../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Ovo polje je obavezno!
      </div>
    );
  }
};

class EditRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeStars = this.onChangeStars.bind(this);
    this.onChangeRestaurantType = this.onChangeRestaurantType.bind(this);

    this.state = {
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      stars: this.props.stars,
      typeId: this.props.typeId,
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
          editRestaurant(
            this.props.id,
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

  render() {
    const { message } = this.props;

    return (
      <div>
        <button
          type="button"
          className="btn btn-card btn-warning"
          data-toggle="modal"
          data-target={`#id${this.props.id}`}
          style={{ marginTop: "2em" }}
        >
          <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
        </button>

        <div
          className="modal fade"
          id={`id${this.props.id}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Restoran
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
                        <label htmlFor="first_name">Ime Restorana</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="name"
                          value={this.props.name}
                          onChange={this.onChangeName}
                          validations={[required]}
                        />
                      </div>

                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="last_name">Adresa</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="address"
                          value={this.props.address}
                          onChange={this.onChangeAddress}
                          validations={[required]}
                        />
                      </div>

                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="email">Grad</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="city"
                          value={this.props.city}
                          onChange={this.onChangeCity}
                          validations={[required]}
                        />
                      </div>

                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="address">Broj Zvjezdica</label>
                        <Select
                          className="form-control"
                          name="stars"
                          value={this.props.stars}
                          onChange={this.onChangeStars}
                        >
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </Select>
                      </div>

                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="password">Tip restorana</label>
                        <Select
                          className="form-control"
                          name="typeId"
                          onChange={this.onChangeRestaurantType}
                          validations={[required]}
                        >
                          {this.renderRestaurantTypes()}
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
      </div>
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

export default connect(mapStateToProps)(EditRestaurant);
