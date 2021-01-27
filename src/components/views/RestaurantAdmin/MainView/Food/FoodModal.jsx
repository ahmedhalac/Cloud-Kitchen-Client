import React, { Component } from "react";

class FoodModal extends Component {
  handleUploadImage(e) {
    const input = e.target;
    let file = input.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      console.log(reader.result);
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  }
  render() {
    return (
      <div>
        <input type="file" accept="image/*" onChange={this.handleUploadImage} />
      </div>
    );
  }
}

export default FoodModal;
