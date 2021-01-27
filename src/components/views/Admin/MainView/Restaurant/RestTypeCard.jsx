import React from "react";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Card } from "react-bootstrap";
import EditRestaurantType from "./EditRestaurantType";
import DeleteRestType from "./DeleteRestType";

const RestTypeCard = ({ id = "", name = "" }) => {
  return (
    <div>
      <Card
        border="light"
        style={{
          width: "17rem",
          padding: "0",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <EditRestaurantType id={id} name={name} />
          <DeleteRestType id={id} name={name} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default RestTypeCard;
