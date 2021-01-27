import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteFoodType } from "../../../../../actions/auth";

class DeleteFoodType extends Component {
  constructor(props) {
    super(props);
    this.deleteFoodType = this.deleteFoodType.bind(this);
  }
  deleteFoodType = () => {
    this.props.dispatch(deleteFoodType(this.props.id));
    window.location.reload(false);
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-card btn-danger"
          data-toggle="modal"
          onClick={this.deleteFoodType}
          style={{ marginTop: "2em" }}
        >
          <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default connect()(DeleteFoodType);
