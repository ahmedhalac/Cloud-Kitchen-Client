import React from "react";
import Swal from "sweetalert2";
import * as emailjs from "emailjs-com";
import "../../assets/css/ContactUs.css";
import { init } from "emailjs-com";
init("user_pU36AWJtkcqOOlMObzWE2");

const templateId = "template_bo33kra";
const serviceId = "service_up281mr";

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "", email: "" };
  }
  // saves the user's name entered to state
  nameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  // saves the user's email entered to state
  emailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  // saves the user's message entered to state
  messageChange = (event) => {
    this.setState({ feedback: event.target.value });
  };

  //onSubmit of email form
  handleSubmit = (event) => {
    event.preventDefault();

    //This is a custom method from EmailJS that takes the information
    //from the form and sends the email with the information gathered
    //and formats the email based on the templateID provided.
    this.sendFeedback(templateId, {
      message: this.state.feedback,
      name: this.state.name,
      email: this.state.email,
    });
  };

  //Custom EmailJS method
  sendFeedback = (templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables)
      .then((res) => {
        // Email successfully sent alert
        Swal.fire({
          title: "Mail je uspješno poslan",
          icon: "success",
        });
      })
      // Email Failed to send Error alert
      .catch((err) => {
        Swal.fire({
          title: "Mail nije poslan",
          icon: "error",
        });
        console.error("Email Error:", err);
      });
  };

  render() {
    return (
      //Form layout that requires a Name, Email, and message
      <form className="test-mailing" onSubmit={this.handleSubmit}>
        <h3 className="text-center font-weight-bold">Kontaktirajte nas</h3>
        <br />
        <div style={{ fontSize: "1.2rem" }}>
          <div className="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa fa-user-circle-o"></i>
              </span>
            </div>
            <input
              className="form-control"
              placeholder="Ime"
              name="user_name"
              type="text"
              id="name"
              onChange={this.nameChange}
              required
            />
          </div>

          <div className="input-group mb-3 mt-4">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
            <input
              className="form-control email-inputs"
              placeholder="Email"
              name="user_email"
              type="text"
              id="email"
              onChange={this.emailChange}
              required
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              onChange={this.messageChange}
              placeholder="Ovdje napišite poruku"
              required
              className="email-text-area form-control mt-4"
              rows="10"
              cols="20"
            />
          </div>
        </div>

        <input
          type="submit"
          value="Pošalji"
          className="btn btn-primary mail-btn mb-5"
        />
      </form>
    );
  }
}

export default Email;
