import React from "react";
import { connect } from "react-redux";
import { getOrders, deleteOrder, addOrderDetails } from "../../actions/auth";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import "../../assets/css/OrderDetails.css";
import * as emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_pU36AWJtkcqOOlMObzWE2");

const templateId = "template_bo33kra";
const serviceId = "service_up281mr";

class OrderDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangePaymentType = this.onChangePaymentType.bind(this);
    this.onChangeOrderTime = this.onChangeOrderTime.bind(this);
    this.onChangeNote = this.onChangeNote.bind(this);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      payment_type: "Gotovina",
      order_time: "",
      note: "",
      total_price: "",
      id: "",
      successful: false,
    };
  }
  componentDidMount() {
    this.props.dispatch(getOrders());
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
  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }
  onChangePaymentType(e) {
    this.setState({
      payment_type: e.target.value,
    });
  }
  onChangeOrderTime(e) {
    this.setState({
      order_time: e.target.value,
    });
  }
  onChangeNote(e) {
    this.setState({
      note: e.target.value,
    });
  }

  deleteOrder = () => {
    this.props.dispatch(deleteOrder(this.state.id));
    console.log(this.state.id);
    window.location.reload(false);
  };

  handleRegister(e) {
    e.preventDefault();
    this.setState({
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(
          addOrderDetails(
            this.state.first_name,
            this.state.last_name,
            this.state.email,
            this.state.phone,
            this.state.payment_type,
            this.state.order_time,
            this.state.note
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

  renderOrders() {
    this.state.total_price = 0;
    return this.props.orders.map((order, index) => {
      this.state.total_price += parseFloat(order.price);
      return (
        <tr key={index}>
          <td>{order.quantity}</td>
          <td>{order.selected_food}</td>
          <td>{order.price}</td>
          <td>
            <button
              className="button"
              onMouseOver={() => {
                this.setState({
                  id: order.id,
                });
              }}
              onClick={this.deleteOrder}
            >
              <span className="close">X</span>
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    const { message } = this.props;
    return (
      <div className="container-fluid">
        <div className="back">
          <a href="/order">
            <button className="btn btn-primary back-btn">Nazad</button>
          </a>
        </div>
        <div className="order-container">
          <table className="table w-50 mt-5">
            <thead>
              <tr>
                <th scope="col">Količina</th>
                <th scope="col">Naziv jela</th>
                <th scope="col">Cijena</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>{this.renderOrders()}</tbody>
            <tfoot>
              <tr>
                <th scope="col">Ukupno</th>
                <th scope="col"></th>
                <td>{this.state.total_price} KM</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <button
          type="button"
          className="btn custom-add btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i className="fal fa-plus fa-lg mr-2"></i>Naruči
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
                  Narudžba detalji
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
                        <label htmlFor="name">Ime</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="first_name"
                          value={this.state.first_name}
                          onChange={this.onChangeFirstName}
                        />
                      </div>
                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="name">Prezime</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="last_name"
                          value={this.state.last_name}
                          onChange={this.onChangeLastName}
                        />
                      </div>
                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="ingredients">Email</label>
                        <Input
                          type="email"
                          className="form-control"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChangeEmail}
                        />
                      </div>
                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="ingredients">Telefon</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="phone"
                          value={this.state.phone}
                          onChange={this.onChangePhone}
                        />
                      </div>
                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="address">Način plaćanja</label>
                        <Select
                          className="form-control"
                          name="payment_type"
                          value={this.state.payment_type}
                          onChange={this.onChangePaymentType}
                        >
                          <option value="Gotovina">Gotovina</option>
                          <option value="Kartica">Kartica</option>
                        </Select>
                      </div>
                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="ingredients">Vrijeme dostave</label>
                        <Input
                          type="time"
                          className="form-control"
                          name="order_time"
                          value={this.state.order_time}
                          onChange={this.onChangeOrderTime}
                        />
                      </div>
                      <div className="form-group w-75 mx-auto">
                        <label htmlFor="ingredients">Napomena</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="note"
                          value={this.state.note}
                          onChange={this.onChangeNote}
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
                            className="fal fa-save fa-lg"
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

function mapStateToProps(state) {
  return {
    orders: Object.values(state.restRed.orders),
  };
}

export default connect(mapStateToProps)(OrderDetails);
