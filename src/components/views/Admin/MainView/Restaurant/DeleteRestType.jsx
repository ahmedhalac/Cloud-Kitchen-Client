import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteRestaurantType } from "../../../../../actions/auth";

class DeleteRestType extends Component {
  constructor(props) {
    super(props);
    this.deleteRestType = this.deleteRestType.bind(this);
  }
  deleteRestType = () => {
    this.props.dispatch(deleteRestaurantType(this.props.id));
    window.location.reload(false);
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-card btn-danger"
          data-toggle="modal"
          onClick={this.deleteRestType}
          style={{ marginTop: "2em" }}
        >
          <i className="fal fa-trash-alt fa-lg" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default connect()(DeleteRestType);
