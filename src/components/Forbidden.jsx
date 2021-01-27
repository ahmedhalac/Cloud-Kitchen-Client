import React from "react";
import "../assets/css/Forbidden.css";

const Forbidden = () => {
  return (
    <div className="forbidden bg-dark text-white py-5">
      <div className="container-403 py-5">
        <div className="row">
          <div className="col-md-2 text-center">
            <p>
              <i className="fa fa-exclamation-triangle fa-5x"></i>
              <br />
              Status Code: 403
            </p>
          </div>
          <div className="col-md-10">
            <h3>UPOZORENJE!!!</h3>
            <p>
              Zbog sigurnosnih razloga Vaš pristup je onemogućen.
              <br />
              <br />
              Molimo Vas da se vratite na prethodnu stranicu.
            </p>
            <a className="btn btn-403 btn-danger" href="/login">
              Povratak nazad
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
